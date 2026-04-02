// Ensure this URL is exactly as shown so the "import" finds the PIXI data
import * as PIXI from "https://jsdelivr.net";

async function startPixi() {
    const app = new PIXI.Application({
        background: '#1099bb',
        resizeTo: window
    });
    document.getElementById("pixi-canvas").appendChild(app.view);

    // --- STEP A: Create the Graphic (The "Drawing") ---
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0xFFFF00);
    graphics.drawRect(0, 0, 100, 100); // A 100x100 square
    graphics.endFill();

    // --- STEP B: Generate a Texture from that Graphic ---
    // This turns the "drawing" into a "reusable image" in memory
    const texture = app.renderer.generateTexture(graphics);

    // --- STEP C: Create a Sprite using that Texture ---
    const squareSprite = new PIXI.Sprite(texture);

    // --- STEP D: Setup the Sprite ---
    // Position it in the center of the screen
    squareSprite.x = app.screen.width / 2;
    squareSprite.y = app.screen.height / 2;
    
    // Set the "anchor" to 0.5 so it rotates around its center point
    squareSprite.anchor.set(0.5);

    // Add the SPRITE to the stage (not the graphic!)
    app.stage.addChild(squareSprite);

    // --- STEP E: Animation (Let's make it spin!) ---
    app.ticker.add((delta) => {
        squareSprite.rotation += 0.05 * delta;
    });
}

startPixi();
