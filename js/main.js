import * as PIXI from "https://cdn.jsdelivr.net/npm/pixi.js@7.4.2/dist/pixi.mjs";

console.log("JS is running");

// Create app
const app = new PIXI.Application({
    backgroundColor: 0x1099bb,
    resizeTo: window
});

// Add canvas
document.getElementById("pixi-canvas").appendChild(app.view);

// Draw rectangle
const graphics = new PIXI.Graphics();
graphics.beginFill(0xFFFF00);
graphics.drawRect(0, 0, 200, 200);
graphics.endFill();

graphics.x = 100;
graphics.y = 100;

app.stage.addChild(graphics);

console.log("Pixi is working");
