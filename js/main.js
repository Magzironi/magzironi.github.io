// We'll use a direct global reference to avoid import issues
import 'https://cloudflare.com';

(async () => {
    // Create the app
    const app = new PIXI.Application();

    // Initialize it
    await app.init({ 
        background: '#1099bb', 
        resizeTo: window 
    });

    // Add it to your HTML
    const container = document.getElementById('pixi-canvas');
    if (container) {
        container.appendChild(app.canvas);
    }

    // Draw a simple yellow rectangle to prove it works
    const graphics = new PIXI.Graphics()
        .rect(0, 0, 200, 200)
        .fill(0xFFFF00);
    
    graphics.x = 100;
    graphics.y = 100;
    app.stage.addChild(graphics);
})();
