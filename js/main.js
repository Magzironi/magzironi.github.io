// Fixed URL
import * as PIXI from "https://jsdelivr.net";

const app = new PIXI.Application({
    background: '#1099bb',
    resizeTo: window,
});

document.getElementById("pixi-canvas").appendChild(app.view);

// 1. Create the drawing (Graphics)
const graphics = new PIXI.Graphics();
graphics.beginFill(0xFFFF00);
graphics.drawRect(0, 0, 200, 200);
graphics.endFill();

// 2. CONVERT TO SPRITE (Your friend's suggestion)
// This turns the drawing into a texture, then into a sprite
const texture = app.renderer.generateTexture(graphics);
const squareSprite = new PIXI.Sprite(texture);

// 3. Setup the Sprite
squareSprite.anchor.set(0.5); // Centers the rotation point
squareSprite.x = app.screen.width / 2;
squareSprite.y = app.screen.height / 2;

// 4. Add the SPRITE to the stage
app.stage.addChild(squareSprite);

// Let's make it spin so you know it's working!
app.ticker.add((delta) => {
    squareSprite.rotation += 0.02 * delta;
});

console.log("Success! Sprite is spinning.");
