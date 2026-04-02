import { Application } from 'https://cloudflare.com';

(async () => {
    const app = new Application();
    await app.init({ 
        background: '#1099bb', 
        resizeTo: window 
    });

    // Add the canvas to the div from your HTML
    document.getElementById('pixi-canvas').appendChild(app.canvas);
})();
