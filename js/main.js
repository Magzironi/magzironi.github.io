const renderer = new PIXI.WebGLRenderer(); 
const options = {width: 500, height: 300}; 
await renderer.init(options); 
await document.getElementById("pixi-canvas").appendChild(renderer.canvas); 

const stage = new PIXI.Container();

// 1. Create a persistent Graphics object on the stage
const gradientShape = new PIXI.Graphics();
stage.addChild(gradientShape); 

// Variables to handle speed direction, position, and looping time
let posX = 0;
let speedX = 2; 
let time = 0;

// 2. The animation loop will clear and redraw the shape on every frame
function animate() {
  time += 0.03; // Controls how fast colors shift and shapes morph

  // --- TASK 1: THE MOVEMENT ENGINE ---
  posX += speedX;
  if (posX > 400 || posX < 0) {
      speedX *= -1; // Bounce off walls
  }
  let posY = 100 + Math.sin(time * 2) * 15; // Floating wave motion

  // --- TASK 2: SHIFT GRADIENT COLORS ---
  // Using sine waves to smoothly cycle green tones
  let lightGreenVal = Math.floor(140 + Math.sin(time) * 40); 
  let darkGreenVal = Math.floor(40 + Math.sin(time + 2) * 20);

  // Generate Hex color formats for PixiJS (e.g., converting values to 0xRRGGBB)
  let colorStart = (0x14 << 16) | (lightGreenVal << 8) | 0x14;
  let colorEnd = (0x05 << 16) | (darkGreenVal << 8) | 0x05;

  const dynamicGradient = new PIXI.FillGradient({
      type: 'linear',
      start: { x: 0, y: 0 }, 
      end: { x: 0, y: 1 },   
      colorStops: [
          { offset: 0, color: colorStart }, 
          { offset: 1, color: colorEnd }  
      ]
  });

  // --- TASK 3: CHANGING SHAPES (Square to Round Circle Corners) ---
  // Calculates a changing radius value between 0 (sharp box) and 50 (perfect circle)
  let dynamicCornerRadius = Math.abs(Math.sin(time)) * 50;

  // Clear previous frame coordinates and draw the new layout
  gradientShape.clear();
  gradientShape
    .roundRect(posX, posY, 100, 100, dynamicCornerRadius)
    .fill(dynamicGradient);

  renderer.render(stage);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
