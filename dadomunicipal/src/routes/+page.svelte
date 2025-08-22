<script>
  import Papa from "papaparse";
  import { onMount } from "svelte";
  import InteractiveMap from "$lib/InteractiveMap.svelte";

  let nome = "";
  let dados = [];
  let resultado = null;
  let mensagem = "";
  let sugestoes = [];
  let selectedMunicipio = "";

  // Carrega o CSV
  onMount(async () => {
    try {
      const res = await fetch("/municipios.csv");

      if (!res.ok) {
        mensagem = "Erro ao carregar dados dos municípios";
        return;
      }

      const texto = await res.text();
      Papa.parse(texto, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          dados = results.data;
        },
        error: () => {
          mensagem = "Erro ao processar dados dos municípios";
        }
      });
    } catch {
      mensagem = "Erro ao carregar dados";
    }
  });

  // Sugestões - removido para usar função manual

  function selecionarSugestao(cidade) {
    nome = cidade;
    resultado = null; // Limpa resultado anterior
    sugestoes = [];
    buscarMunicipio();
    // Destaca o município específico selecionado
    selectedMunicipio = cidade;
  }

  function buscarMunicipio() {
    if (nome.trim()) {
      const searchLower = removeAccents(nome);
      resultado = dados.find(
        (linha) => removeAccents(linha.MUNICIPIO || '') === searchLower
      );
      // Se encontrou resultado exato, destaca apenas esse município
      if (resultado) {
        selectedMunicipio = resultado.MUNICIPIO;
      } else {
        selectedMunicipio = searchLower; // Mantém o destaque parcial
      }
      sugestoes = [];
    } else {
      // Se não há texto, limpa tudo
      selectedMunicipio = "";
      resultado = null;
      sugestoes = [];
    }
  }

  function handleKeydown(event) {
    if (event.key === 'Enter') {
      buscarMunicipio();
    }
  }

  // Função para remover acentos (igual à do mapa)
  function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  function getShapefileName(municipioName) {
    // Manter o nome original com acentos e maiúsculas
    return `${municipioName}.zip`;
  }

  function downloadShapefile(municipioName) {
    const fileName = getShapefileName(municipioName);
    const fileUrl = `/shapefiles/${fileName}`;
    
    // Cria um link temporário para download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.target = '_blank';
    
    // Tenta fazer o download
    fetch(fileUrl, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          link.click();
        } else {
          alert('Shapefile não disponível para este município.');
        }
      })
      .catch(() => {
        alert('Shapefile não disponível para este município.');
      });
  }

  function buscarSugestoes() {
    // Limpa resultado anterior quando usuário digita
    if (resultado) {
      resultado = null;
    }
    
    // Função chamada no input para atualizar sugestões e destacar no mapa
    if (nome.length > 0 && dados.length > 0) {
      const searchLower = removeAccents(nome);
      
      // Atualiza sugestões
      sugestoes = dados
        .filter((linha) => {
          const municipioNome = linha.MUNICIPIO || '';
          return removeAccents(municipioNome).includes(searchLower);
        })
        .sort((a, b) => {
          // Prioriza municípios que começam com o termo de busca
          const aStartsWith = removeAccents(a.MUNICIPIO || '').startsWith(searchLower);
          const bStartsWith = removeAccents(b.MUNICIPIO || '').startsWith(searchLower);
          
          if (aStartsWith && !bStartsWith) return -1;
          if (!aStartsWith && bStartsWith) return 1;
          
          // Se ambos começam ou não começam, ordena alfabeticamente
          return (a.MUNICIPIO || '').localeCompare(b.MUNICIPIO || '');
        })
        .slice(0, 10);
      
      // Destaca municípios no mapa (igual ao search do mapa)
      selectedMunicipio = searchLower; // Usa o termo de busca para destacar
    } else {
      sugestoes = [];
      selectedMunicipio = ""; // Limpa o destaque no mapa
    }
  }
</script>

<div class="dashboard-container">
  <div class="search-section">
    <h2>Dados nos municípios</h2>
    <div class="search-input-container">
      <input
        type="text"
        bind:value={nome}
        placeholder="Nome do município..."
        on:input={buscarSugestoes}
        on:keydown={handleKeydown}
        class="search-input"
      />
      <button on:click={buscarMunicipio} class="search-btn">
        Pesquisar
      </button>
    </div>
    
    {#if sugestoes.length > 0}
      <ul class="sugestoes">
        {#each sugestoes as sugestao}
          <li on:click={() => selecionarSugestao(sugestao.MUNICIPIO)}>
            {sugestao.MUNICIPIO}
          </li>
        {/each}
      </ul>
    {/if}

    {#if resultado}
      <div class="result-container">
        <h3>{resultado.MUNICIPIO}</h3>
        <table class="result-table">
          <thead>
            <tr>
              <th>RAI</th>
              <th>Portal</th>
              <th>Shapefiles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {#if resultado.RAI?.toLowerCase() === "sim"}
                  Há um responsável de acesso à informação no município. Para pedidos de acesso a documentos administrativos, envie um email com a solicitação para <span class="email-destaque">{resultado.RAI_Email}</span>
                {:else}
                  Não há um responsável de acesso à informação no município. Para saber mais informação aceda a <a href={resultado.Website} target="_blank">{resultado.Website}</a>
                {/if}
              </td>
              <td>
                {#if resultado.PORTAL && resultado.PORTAL.toLowerCase() !== 'nao' && resultado.PORTAL.toLowerCase() !== 'não'}
                  <a href={resultado.PORTAL} target="_blank">{resultado.PORTAL}</a>
                {:else}
                  Não há registos de portal de dados abertos no município indicado.
                {/if}
              </td>
              <td>
                <button 
                  class="download-btn" 
                  on:click={() => downloadShapefile(resultado.MUNICIPIO)}
                >
                  <svg class="download-icon" width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <!-- Download arrow -->
                    <g stroke="#333" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none">
                      <!-- Vertical line -->
                      <line x1="50" y1="15" x2="50" y2="55" />
                      <!-- Arrow head -->
                      <polyline points="35,40 50,55 65,40" />
                    </g>
                    
                    <!-- Download tray/container -->
                    <g stroke="#333" stroke-width="6" stroke-linecap="square" stroke-linejoin="miter" fill="none">
                      <path d="M20 65 L20 80 L80 80 L80 65" />
                    </g>
                  </svg>
                  <span class="download-text">Download <strong>Shapefile</strong> do Município</span>
                </button>
                <div class="shapefile-info">
                  Shapefile disponível, use para contar histórias locais.
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <button class="clear-btn" on:click={() => { resultado = null; nome = ''; selectedMunicipio = ''; }}>
          Selecionar outro município
        </button>
      </div>
    {/if}
  </div>

  <div class="map-section">
    <InteractiveMap selectedMunicipio={selectedMunicipio} />
  </div>
</div>

<style>
  .dashboard-container {
    display: flex;
    gap: 40px;
    padding: 40px;
    background-color: white;
    font-family: 'Bai Jamjuree', sans-serif;
    color: #333;
    min-height: 100vh;
    max-width: 1400px;
    margin: 0 auto;
    justify-content: center;
    overflow: visible;
  }

  .search-section {
    flex: 0 0 400px;
    background-color: white;
    border: 1px solid #333;
    border-radius: 8px;
    padding: 30px;
    height: fit-content;
  }

  .search-section h2 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
    color: #333;
  }

  .search-input-container {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
  }

  .search-input {
    flex: 1;
    padding: 8px 12px;
    border: 1px solid #333;
    border-radius: 3px;
    font-family: 'Bai Jamjuree', sans-serif;
    font-size: 14px;
    font-weight: 400;
    background: white;
    color: #333;
  }

  .search-input:focus {
    outline: none;
    border-color: #000;
  }

  .search-btn {
    padding: 8px 16px;
    background: white;
    color: #333;
    border: 1px solid #333;
    border-radius: 3px;
    font-family: 'Bai Jamjuree', sans-serif;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.2s;
  }

  .search-btn:hover {
    background: #f8f9fa;
    border-color: #000;
  }

  .sugestoes {
    list-style: none;
    padding: 0;
    margin: 0;
    border: 1px solid #333;
    border-radius: 3px;
    background: white;
    max-height: 250px;
    overflow-y: auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .sugestoes li {
    padding: 10px 12px;
    cursor: pointer;
    border-bottom: 1px solid #ddd;
    font-size: 14px;
    font-weight: 400;
    transition: background-color 0.2s;
  }

  .sugestoes li:hover {
    background: #f8f9fa;
  }

  .sugestoes li:last-child {
    border-bottom: none;
  }

  .sugestoes li:first-child {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  .sugestoes li:last-child {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  .result-container {
    margin-top: 20px;
  }

  .result-container h3 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 15px;
    color: #333;
  }

  .result-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    font-size: 13px;
    font-weight: 400;
    border: 1px solid #333;
    border-radius: 8px;
    overflow: hidden;
  }

  .result-table th {
    background-color: #f8f9fa;
    font-weight: 500;
    border-bottom: 2px solid #333;
    color: #333;
    padding: 12px 8px;
    text-align: left;
  }

  .result-table td {
    padding: 12px 8px;
    border-bottom: 1px solid #ddd;
    vertical-align: top;
  }

  .result-table tr:hover {
    background-color: #f5f5f5;
  }

  .clear-btn {
    width: 100%;
    padding: 10px;
    background: white;
    color: #333;
    border: 1px solid #333;
    border-radius: 3px;
    font-family: 'Bai Jamjuree', sans-serif;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.2s;
  }

  .clear-btn:hover {
    background: #f8f9fa;
    border-color: #000;
  }

  .map-section {
    flex: 0 0 40%;
    background-color: transparent;
    border: 1px solid #333;
    border-radius: 8px;
    padding: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    height: 600px;
  }

  .link-verde {
    color: #333;
    text-decoration: underline;
    transition: opacity 0.2s;
  }

  .link-verde:hover {
    opacity: 0.7;
  }

  .email-destaque {
    background-color: #e8e4f0;
    padding: 2px 4px;
    border-radius: 2px;
  }

  .download-btn {
    padding: 12px 20px;
    background: white;
    color: #333;
    border: 1px solid #333;
    border-radius: 3px;
    font-family: 'Bai Jamjuree', sans-serif;
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    min-width: 100px;
  }

  .download-btn:hover {
    background: #f8f9fa;
    border-color: #000;
  }

  .download-icon {
    width: 32px;
    height: 32px;
    display: block;
  }

  .download-text {
    font-size: 11px;
    text-align: center;
    line-height: 1.2;
  }

  .shapefile-info {
    font-size: 9px;
    color: #60b189;
    text-align: center;
    margin-top: 6px;
    font-style: italic;
    line-height: 1.3;
  }
</style>
