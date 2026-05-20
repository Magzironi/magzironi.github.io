const renderer = new PIXI.WebGLRenderer(); 
const options = {width: 500, height: 300}; 
await renderer.init(options); 
await document.getElementById("pixi-canvas").appendChild(renderer.canvas); 

const stage = new PIXI.Container();

// 1. Create a native PixiJS v8 vertical linear gradient 
const forestGradient = new PIXI.FillGradient({
    type: 'linear',
    start: { x: 0, y: 0 }, 
    end: { x: 0, y: 1 },   
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

renderer.render(stage); 

// Clear out loop function
function animate() {
  renderer.render(stage);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
