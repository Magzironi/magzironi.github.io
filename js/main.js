import * as PIXI from "https://jsdelivr.net";

// 1. Initialize the app
const app = new PIXI.Application({
    background: '#1099bb',
    resizeTo: window,
});

// 2. Add it to your div
document.getElementById("pixi-canvas").appendChild(app.view);

// 3. Create the square
const graphics = new PIXI.Graphics();
graphics.beginFill(0xFFFF00); // Yellow
graphics.drawRect(0, 0, 200, 200);
graphics.endFill();

// 4. Center it a bit better
graphics.x = 100;
graphics.y = 100;

// 5. Add to stage
app.stage.addChild(graphics);

// PRO TIP: If it's still blank, force a render update
app.renderer.render(app.stage);

console.log("Canvas width:", app.screen.width);

