console.log("JS is running");

// Create app (Pixi v7 style)
const app = new PIXI.Application({
    backgroundColor: 0x1099bb,
    resizeTo: window
});

// Add canvas to page
const container = document.getElementById('pixi-canvas');

if (!container) {
    console.error("No container found!");
} else {
    container.appendChild(app.view);
}

// Draw rectangle
const graphics = new PIXI.Graphics();
graphics.beginFill(0xFFFF00);
graphics.drawRect(0, 0, 200, 200);
graphics.endFill();

graphics.x = 100;
graphics.y = 100;

app.stage.addChild(graphics);

console.log("Pixi is working");
