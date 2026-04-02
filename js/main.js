// We'll use a direct global reference to avoid import issues
import 'https://cloudflare.com';

(async () => {
    const app = new PIXI.Application();

    await app.init({ 
        background: '#1099bb', 
        resizeTo: window 
    });

    const container = document.getElementById('pixi-canvas');
    if (container) {
        container.appendChild(app.canvas);
    }

    const graphics = new PIXI.Graphics()
        .rect(0, 0, 200, 200)
        .fill(0xFFFF00);
    
    graphics.x = 100;
    graphics.y = 100;
    app.stage.addChild(graphics);
})();
