import * as PIXI from "https://cdn.jsdelivr.net/npm/pixi.js@7.4.2/dist/pixi.mjs";

console.log("JS is running");

// Using an async function is the safest way to ensure PIXI is ready
async function init() {
    const app = new PIXI.Application({
        background: '#1099bb', // v7 uses 'background' or 'backgroundColor'
        resizeTo: window
    });

    // Wait for the app to be ready (Critical for modern browser stability)
    await app.init; 

    // Add the canvas to your div
    // Note: In v7 it is app.view; in v8 it changed to app.canvas
    document.getElementById("pixi-canvas").appendChild(app.view);

    // Draw rectangle
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0xFFFF00); // Yellow
    graphics.drawRect(0, 0, 200, 200);
    graphics.endFill();

    graphics.x = 100;
    graphics.y = 100;

    app.stage.addChild(graphics);
    console.log("Graphics added to stage");
}

init();
