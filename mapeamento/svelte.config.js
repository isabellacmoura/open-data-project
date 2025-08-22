import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter(),
    // importante: desative prerender automático
    prerender: { entries: [] }
  }
};

export default config;