<script>
  import { onMount } from 'svelte';
  import * as d3 from 'd3';
  import Papa from 'papaparse';

  let mapContainer;
  let municipiosData = [];
  let geoData = null;
  let loading = true;
  let error = null;
         let allPaths = null;
       let zoomBehavior = null;
       
       // Props
       export let selectedMunicipio = '';

  onMount(async () => {
    try {
      const csvResponse = await fetch('/municipios.csv');
      if (!csvResponse.ok) {
        throw new Error(`Erro ao carregar CSV: ${csvResponse.status}`);
      }
      
      const csvText = await csvResponse.text();
      const csvData = Papa.parse(csvText, { header: true, delimiter: ';' }).data;
      municipiosData = csvData.reduce((acc, row) => { 
        acc[row.MUNICIPIO] = row; 
        return acc; 
      }, {});
      
      console.log('CSV carregado com', Object.keys(municipiosData).length, 'municípios');
      console.log('Exemplos de municípios no CSV:', Object.keys(municipiosData).slice(0, 5));
      console.log('Primeiros 5 municípios do CSV:', Object.keys(municipiosData).slice(0, 5).map(nome => ({ nome, dados: municipiosData[nome] })));

      const geoResponse = await fetch('/PortugalM.geojson');
      if (!geoResponse.ok) {
        throw new Error(`Erro ao carregar GeoJSON: ${geoResponse.status}`);
      }
      
      geoData = await geoResponse.json();
      createMap();
      loading = false;
    } catch (err) {
      console.error('Erro ao carregar dados:', err);
      error = err.message;
      loading = false;
    }
  });

  function createMap() {
    if (!geoData || !mapContainer) {
      return;
    }

             const width = 800;
         const height = 500;

    // Limpar container
    d3.select(mapContainer).selectAll("*").remove();

             // Criar SVG
         const svg = d3.select(mapContainer)
           .append('svg')
           .attr('width', '100%')
           .attr('height', '100%')
           .attr('viewBox', `0 0 ${width} ${height}`)
           .style('background', 'transparent')
           .style('cursor', 'grab');

         // Adicionar zoom e pan
         const zoom = d3.zoom()
           .scaleExtent([1, 8]) // Zoom de 1x a 8x
           .on('zoom', (event) => {
             svg.selectAll('path')
               .attr('transform', event.transform);
           });

         svg.call(zoom);
         zoomBehavior = zoom;

    try {
      // PROJEÇÃO CORRIGIDA PARA PORTUGAL
      // Método 1: Usar fitSize para ajuste automático (RECOMENDADO)
      // const projection = d3.geoMercator()
      //   .fitSize([width, height], geoData);

      // Método 2: Configuração manual mais precisa para Portugal
      const projection = d3.geoMercator()
        .center([-11.0, 39.2]) // Centro mais preciso de Portugal Continental
        .scale(6500) // Escala ajustada
        .translate([width / 2-350, height / 2]);

      // Método 3: Incluindo Açores e Madeira com padding
      // const projection = d3.geoMercator()
      //   .fitExtent([[20, 20], [width - 20, height - 20]], geoData);

      const path = d3.geoPath().projection(projection);

      // Criar tooltip
      const tooltip = d3.select('body')
        .append('div')
        .attr('id', 'map-tooltip')
        .style('position', 'absolute')
        .style('background', 'rgba(0, 0, 0, 0.8)')
        .style('color', 'white')
        .style('padding', '8px 12px')
        .style('border-radius', '4px')
        .style('font-size', '12px')
        .style('font-family', "'Bai Jamjuree', sans-serif")
        .style('pointer-events', 'none')
        .style('z-index', '1000')
        .style('opacity', '0')
        .style('transition', 'opacity 0.2s');

      // Desenhar municípios
      allPaths = svg.selectAll('path')
        .data(geoData.features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('fill', (feature) => {
          const nomeGeoJSON = feature.properties.NAME_2;
          const municipio = municipiosData[nomeGeoJSON];
          
          // Debug: log alguns exemplos
          if (feature.properties.NAME_2 === 'Évora' || feature.properties.NAME_2 === 'Lisboa' || feature.properties.NAME_2 === 'Porto') {
            console.log('Município:', feature.properties.NAME_2, 'Dados encontrados:', municipio);
            if (municipio) {
              console.log('RAI:', municipio.RAI, 'PORTAL:', municipio.PORTAL);
            }
          }

          if (municipio && municipio.RAI?.trim().toUpperCase() === 'SIM' && municipio.PORTAL && municipio.PORTAL.trim() !== 'NAO' && municipio.PORTAL.trim().startsWith('http')) {
            return '#c44c49'; // Vermelho para RAI = SIM e tem Portal
          } else if (municipio && municipio.RAI?.trim().toUpperCase() === 'SIM') {
            return 'rgb(191, 170, 234)'; // Cinza arroxado para RAI = SIM mas sem Portal
          } else if (municipio && municipio.PORTAL && municipio.PORTAL.trim() !== 'NAO' && municipio.PORTAL.trim().startsWith('http')) {
            return '#de866b'; // Laranja claro para tem Portal mas sem RAI
          } else if (municipio) {
            return '#f8f1e7'; // Bege claro para sem RAI e sem Portal
          }
          return '#E0E0E0'; // Cinza claro para sem dados
        })
        .attr('stroke', '#de6e4c') // Cor dos limites do mapa - laranja
        .attr('stroke-width', '0.5') // Espessura dos limites - mais fino
        .style('cursor', 'pointer')
        .style('opacity', '1')
        .style('transition', 'opacity 0.3s')
        // HOVER EVENTS COM D3
        .on('mouseover', function(event, feature) {
          // Destacar município
          d3.select(this)
            .attr('stroke', '#000')
            .attr('stroke-width', '1.5')
            .style('filter', 'brightness(1.1)');

          // Obter dados do município
          const nomeMunicipio = feature.properties.NAME_2 || feature.properties.name || 'Desconhecido';
          const municipio = municipiosData[nomeMunicipio];
          
          // Preparar conteúdo do tooltip
          let tooltipContent = `<strong>${nomeMunicipio}</strong>`;
          if (municipio) {
            // Formatar RAI
            const rai = municipio.RAI?.trim().toUpperCase() === 'SIM' ? 'Sim' : 'Não';
            tooltipContent += `<br/>RAI: ${rai}`;
            
            // Formatar Portal
            const portal = municipio.PORTAL?.trim();
            if (portal && portal !== 'NAO' && portal.startsWith('http')) {
              tooltipContent += `<br/>Portal: <a href="${portal}" target="_blank">${portal}</a>`;
            } else {
              tooltipContent += `<br/>Portal: Não`;
            }
            
            // Adicionar outros campos se existirem
            if (municipio.DISTRITO) {
              tooltipContent += `<br/>Distrito: ${municipio.DISTRITO}`;
            }
          } else {
            tooltipContent += '<br/><em>Sem dados disponíveis</em>';
          }

          // Mostrar tooltip
          tooltip
            .style('opacity', '1')
            .html(tooltipContent)
            .style('left', (event.pageX + 10) + 'px')
            .style('top', (event.pageY - 10) + 'px');
        })
        .on('mousemove', function(event) {
          // Atualizar posição do tooltip conforme o mouse se move
          tooltip
            .style('left', (event.pageX + 10) + 'px')
            .style('top', (event.pageY - 10) + 'px');
        })
        .on('mouseout', function(event, feature) {
          // Restaurar aparência original
          const municipio = municipiosData[feature.properties.NAME_2 || feature.properties.name];
          d3.select(this)
            .attr('stroke', '#de6e4c') // Manter cor laranja original
            .attr('stroke-width', '0.5')
            .style('filter', 'none');

          // Esconder tooltip
          tooltip.style('opacity', '0');
        })
        // Evento de clique (opcional)
        .on('click', function(event, feature) {
          const nomeMunicipio = feature.properties.NAME_2 || feature.properties.name;
          console.log('Clicou em:', nomeMunicipio);
          // Aqui você pode adicionar ações ao clicar no município
        });

      console.log('Mapa criado com sucesso!');

    } catch (err) {
      console.error('Erro ao criar mapa:', err);
      error = err.message;
    }
  }

  // Função para remover acentos
  function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }



         // Função para destacar município selecionado
       function highlightSelectedMunicipio(municipioName) {
         if (!allPaths) {
           return;
         }
         
         if (!municipioName || municipioName.trim() === '') {
           // Se não há município selecionado, mostrar todos normalmente
           allPaths.style('opacity', '1');
           return;
         }

         const searchLower = removeAccents(municipioName.toLowerCase().trim());
         
         allPaths.style('opacity', (feature) => {
           const nomeMunicipio = feature.properties.NAME_2 || feature.properties.name || '';
           return removeAccents(nomeMunicipio).includes(searchLower) ? '1' : '0.2';
         });
       }

       // Reatividade para quando selectedMunicipio mudar
       $: {
         console.log('selectedMunicipio mudou:', selectedMunicipio);
         if (selectedMunicipio !== undefined) {
           highlightSelectedMunicipio(selectedMunicipio);
         }
       }

       // Funções de zoom
       function zoomIn() {
         if (zoomBehavior) {
           d3.select(mapContainer).select('svg').transition().duration(300).call(
             zoomBehavior.scaleBy, 1.5
           );
         }
       }

       function zoomOut() {
         if (zoomBehavior) {
           d3.select(mapContainer).select('svg').transition().duration(300).call(
             zoomBehavior.scaleBy, 1 / 1.5
           );
         }
       }

       function resetZoom() {
         if (zoomBehavior) {
           d3.select(mapContainer).select('svg').transition().duration(300).call(
             zoomBehavior.transform, d3.zoomIdentity
           );
         }
       }

       // Cleanup do tooltip quando o componente é destruído
       function onDestroy() {
         d3.select('#map-tooltip').remove();
       }
</script>

     <div class="interactive-map-container">
  
  {#if loading}
    <div class="loading">
      <p>Carregando mapa interativo...</p>
      <p>Isso pode demorar alguns segundos devido ao tamanho do arquivo.</p>
    </div>
  {:else if error}
    <div class="error">
      <p>Erro ao carregar o mapa: {error}</p>
    </div>
  {/if}
  
                <!-- Container onde o D3 vai renderizar o mapa -->
       <div class="map-wrapper" bind:this={mapContainer}></div>
       
       <!-- Controles de zoom -->
       <div class="zoom-controls">
         <button class="zoom-btn" on:click={zoomIn}>+</button>
         <button class="zoom-btn" on:click={zoomOut}>−</button>
         <button class="zoom-btn" on:click={resetZoom}>⌂</button>
       </div>
  
                   <div class="legend-container">
          <div class="legend-item">
            <div class="legend-color color-beige"></div>
            <span>Sem RAI e sem portal</span>
          </div>
          <div class="legend-item">
            <div class="legend-color color-light-purple-gray"></div>
            <span>Município com Responsável de Acesso à Informação</span>
          </div>
          <div class="legend-item">
            <div class="legend-color color-red"></div>
            <span>Município com RAI e Portal de Dados Abertos</span>
          </div>
          <div class="legend-item">
            <div class="legend-color color-orange"></div>
            <span>Município com Portal de Dados Abertos e sem RAI</span>
          </div>
        </div>


</div>

<style>
         .interactive-map-container {
         text-align: center;
         padding: 0;
         font-family: 'Bai Jamjuree', sans-serif;
         position: relative;
         background-color: transparent;
         color: #333;
         height: 100%;
         overflow: visible;
       }

       .map-title {
         font-size: 20px;
         font-weight: 400;
         margin-bottom: 30px;
         color: #333;
         line-height: 1.2;
       }

         .loading, .error {
         padding: 20px;
         margin: 10px 0;
         color: #333;
         font-weight: 400;
       }

       .error {
         color: #333;
         background: #f8f9fa;
         border: 1px solid #333;
         border-radius: 3px;
       }

         .map-wrapper {
         margin: 0;
         padding: 0;
         display: flex;
         justify-content: center;
         align-items: center;
         position: relative;
         overflow: hidden;
         background-color: transparent;
         height: 100%;
         width: 100%;
         max-width: 600px;
       }



                  .legend-container {
         display: flex;
         justify-content: center;
         gap: 8px;
         margin-top: 5px;
         flex-wrap: wrap;
         position: relative;
         top: -90px;
       }

       .legend-item {
         display: flex;
         align-items: center;
         gap: 4px;
         font-size: 12px;
         line-height: 1.2;
         color: #333;
         font-weight: 400;
         background-color: white;
         padding: 4px 8px;
         border-radius: 3px;
         box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
       }

       .legend-color {
         width: 14px;
         height: 14px;
         border-radius: 2px;
         border: 1px solid #333;
       }

  .color-light-purple-gray { background-color:rgb(191, 170, 234); }
  .color-beige { background-color: #f8f1e7; }
  .color-red { background-color: #c44c49; }
  .color-orange { background-color: #de866b; }
  .color-gray { background-color: #E0E0E0; }

         .instructions {
         margin-top: 40px;
         color: #666;
         font-style: italic;
         font-size: 14px;
       }

       .zoom-controls {
         position: absolute;
         top: 50px;
         right: 30px;
         display: flex;
         flex-direction: column;
         gap: 3px;
         z-index: 1000;
       }

       .zoom-btn {
         width: 28px;
         height: 28px;
         background: white;
         border: 1px solid #333;
         border-radius: 3px;
         font-size: 14px;
         font-weight: 400;
         cursor: pointer;
         display: flex;
         align-items: center;
         justify-content: center;
         transition: all 0.2s;
         font-family: 'Bai Jamjuree', sans-serif;
         color: #333;
       }

       .zoom-btn:hover {
         background: #f8f9fa;
         border-color: #000;
       }

       .zoom-btn:active {
         background: #f1f1f1;
       }
</style>