import * as PIXI from "https://jsdelivr.net";

console.log("Starting Pixi...");

// 1. Create the Application
const app = new PIXI.Application({
    background: '#1099bb',
    resizeTo: window,
});

// 2. Add the canvas to your HTML div
const container = document.getElementById("pixi-canvas");
if (container) {
    container.appendChild(app.view);
    console.log("Canvas attached!");
} else {
    console.error("Could not find the pixi-canvas div!");
}

// 3. Create the Graphic (The drawing)
const rect = new PIXI.Graphics();
rect.beginFill(0xFFFF00); // Yellow
rect.drawRect(0, 0, 100, 100);
rect.endFill();

// 4. GENERATE TEXTURE (This follows your friend's advice)
// This turns the 'drawing' into an 'image'
const texture = app.renderer.generateTexture(rect);

// 5. CREATE THE SPRITE
const sprite = new PIXI.Sprite(texture);

// 6. POSITION THE SPRITE
sprite.anchor.set(0.5); // Center the rotation point
sprite.x = app.screen.width / 2;
sprite.y = app.screen.height / 2;

// 7. ADD TO STAGE
app.stage.addChild(sprite);

// 8. ADD A LITTLE SPIN (Just to prove it's alive!)
app.ticker.add((delta) => {
    sprite.rotation += 0.02 * delta;
});

console.log("Sprite added and spinning!");
