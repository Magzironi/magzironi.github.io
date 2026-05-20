const renderer = new PIXI.WebGLRenderer(); 
const options = {width: 500, height: 300}; 
await renderer.init(options); 
await document.getElementById("pixi-canvas").appendChild(renderer.canvas); 

const stage = new PIXI.Container();

// 1. Setup the empty graphics container on the stage
const gradientShape = new PIXI.Graphics();
stage.addChild(gradientShape); 

// Variables to handle speed direction and ticking time
let speedX = 2; 
let posX = 0; 
let time = 0;

// 2. The animation loop clears and redraws the shape with new roundness AND pulsing colors every frame
function animate() {
  time += 0.05;

  // Horizontal Movement Engine
  posX += speedX;
  if (posX > 400 || posX < 0) {
      speedX *= -1; 
  }

  // Subtle vertical floating wave motion
  let posY = 100 + Math.sin(time) * 15;

  // Calculate a changing radius value between 0 (Sharp Square) and 50 (Perfect Circle)
  let dynamicCornerRadius = Math.abs(Math.sin(time * 0.5)) * 50;

  // --- NEW: DYNAMIC COLOR PULSING ---
  // Shift the green channel smoothly using sine waves (keeps them inside rich forest tones)
  let lightGreenVal = Math.floor(140 + Math.sin(time) * 40); 
  let darkGreenVal = Math.floor(40 + Math.sin(time + 1.5) * 20);

  // Pack the color channels into PixiJS Hex formats (0xRRGGBB)
  let colorStart = (0x14 << 16) | (lightGreenVal << 8) | 0x14; // Light Forest Pulse
  let colorEnd = (0x05 << 16) | (darkGreenVal << 8) | 0x05;   // Dark Pine Pulse

  // Generate the new updating gradient object for this specific frame
  const dynamicGradient = new PIXI.FillGradient({
      type: 'linear',
      start: { x: 0, y: 0 }, 
      end: { x: 0, y: 1 },   
      colorStops: [
          { offset: 0, color: colorStart }, 
          { offset: 1, color: colorEnd }  
      ]
  });

  // Clear out the previous frame geometry and redraw with the new roundness and color gradient
  gradientShape.clear();
  gradientShape
    .roundRect(posX, posY, 100, 100, dynamicCornerRadius)
    .fill(dynamicGradient);

  renderer.render(stage);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
