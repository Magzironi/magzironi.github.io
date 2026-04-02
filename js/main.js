console.log("JS is running");

// Create app
const app = new PIXI.Application({
    background: '#1099bb',
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
console.log("Pixi script running");

    // Create the app
    const app = new PIXI.Application();

    // Initialize it
    await app.init({ 
        background: '#1099bb', 
        resizeTo: window 
    });

    // Add canvas to page
    const container = document.getElementById('pixi-canvas');

    if (!container) {
        console.error("Container not found!");
        return;
    }

    container.appendChild(app.canvas);

    // Draw a yellow rectangle
    const graphics = new PIXI.Graphics()
        .rect(0, 0, 200, 200)
        .fill(0xFFFF00);

    graphics.x = 100;
    graphics.y = 100;

    app.stage.addChild(graphics);
