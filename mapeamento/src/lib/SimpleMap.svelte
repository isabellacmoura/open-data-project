<script>
  import { onMount } from 'svelte';

  let loading = true;
  let error = null;

  onMount(async () => {
    console.log('=== TESTE ULTRA SIMPLES ===');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 100));
      console.log('Componente montado com sucesso!');
      loading = false;
    } catch (err) {
      console.error('Erro:', err);
      error = err.message;
      loading = false;
    }
  });
</script>

<div class="simple-map-container">
  <h3>Teste Ultra Simples</h3>
  
  {#if loading}
    <div class="loading">
      <p>Carregando...</p>
    </div>
  {:else if error}
    <div class="error">
      <p>Erro: {error}</p>
    </div>
  {:else}
    <div class="map-wrapper">
      <p>SVG renderizado diretamente:</p>
      
      <!-- SVG direto no template -->
      <svg width="300" height="200" style="background: #e0e0e0; border: 2px solid #333; display: block; margin: 20px auto;">
        <rect x="50" y="50" width="200" height="100" fill="#ff6b35" stroke="#333" stroke-width="3"></rect>
        <text x="150" y="100" text-anchor="middle" dominant-baseline="middle" fill="white" font-size="16" font-weight="bold">
          MAPA FUNCIONANDO!
        </text>
      </svg>
      
      <p style="color: green; font-weight: bold;">✅ Se você vê o retângulo laranja acima, o SVG está funcionando!</p>
    </div>
  {/if}
</div>

<style>
  .simple-map-container {
    text-align: center;
    padding: 20px;
    font-family: 'Bai Jamjuree', sans-serif;
  }

  .loading, .error {
    padding: 20px;
    margin: 10px 0;
  }

  .error {
    color: #dc2626;
    background: #fef2f2;
    border: 1px solid #fecaca;
    border-radius: 4px;
  }

  .map-wrapper {
    margin: 20px 0;
  }

  .map-wrapper p {
    margin: 10px 0;
    color: #666;
  }
</style>
