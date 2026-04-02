// This tells the browser where to find the PixiJS engine
import { Application, Assets, Sprite } from 'https://cloudflare.com';

(async () => {
    // 1. Create a new PixiJS application
    const app = new Application();

    // 2. Initialize the application with a blue background
    await app.init({ 
        background: '#1099bb', 
        resizeTo: window 
    });

    // 3. Add the canvas to your HTML div
    const container = document.getElementById('pixi-canvas');
    if (container) {
        container.appendChild(app.canvas);
    } else {
        console.error("Could not find the 'pixi-canvas' div!");
    }

    // 4. Let's add a simple test spinning square
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0xFFFF00); // Yellow
    graphics.drawRect(-25, -25, 50, 50);
    graphics.endFill();
    graphics.x = app.screen.width / 2;
    graphics.y = app.screen.height / 2;
    app.stage.addChild(graphics);

    // Make it rotate
    app.ticker.add((time) => {
        graphics.rotation += 0.05 * time.deltaTime;
    });
})();
