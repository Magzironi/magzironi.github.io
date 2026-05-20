const renderer = new PIXI.WebGLRenderer(); // You should be able to use PIXI.Application() too.
const options = {width: 500, height: 300}; // Make it any reasonable size you want.
await renderer.init(options); //passing the initializing options we made above to the renderer, and initializing em.
await document.getElementById("pixi-canvas").appendChild(renderer.canvas); //here is where we slap the canvas on.

const stage = new PIXI.Container(); //if you use PIXI.Application(), that already has a "stage" & you use that.

// 1. Create a native PixiJS v8 vertical linear gradient 
const forestGradient = new PIXI.FillGradient({
    type: 'linear',
    start: { x: 0, y: 0 }, // Start at the top of the shape
    end: { x: 0, y: 1 },   // End at the bottom of the shape
    colorStops: [
        { offset: 0, color: 0x218C21 }, // Light Forest Green
        { offset: 1, color: 0x052605 }  // Dark Pine Green
    ]
});

// 2. Draw a rectangle shape and fill it directly with your gradient
const gradientShape = new PIXI.Graphics()
    .rect(0, 0, 100, 100)
    .fill(forestGradient);

// Place the shape onto the stage
stage.addChild(gradientShape); 

renderer.render(stage); //adding stage to the renderer canvas to be drawn (like adding a node to cocos's Canvas node)

// this function is like a "time" function that continuously runs. The game engine's ticker. This is PIXI's.
function animate() {
  renderer.render(stage);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate); // when we call the ticker, if you have animating elements, they'll animate. Else its just a still image.
