export default {
    async fetch(request, env) {
      const url = new URL(request.url);
      const path = url.pathname;
      const prompt = url.searchParams.get('prompt');
      const model = url.searchParams.get('model') || '@cf/stabilityai/stable-diffusion-xl-base-1.0';
  
      if (path === '/generate' && prompt) {
        try {
          const response = await env.AI.run(model, { prompt: prompt.slice(0, 500) });
          return new Response(response, {
            headers: {
              'content-type': 'image/png',
              'cache-control': 'no-store, max-age=0',
              'Access-Control-Allow-Origin': '*',
            }
          });
        } catch (error) {
          return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {'content-type': 'application/json', 'Access-Control-Allow-Origin': '*'}
          });
        }
      }
  
      const html = await fetch('https://vauth.github.io/imageai/');
      return new Response(await html.text(), {
        headers: { 'content-type': 'text/html; charset=utf-8', 'Access-Control-Allow-Origin': '*'}
      });
    },
  };