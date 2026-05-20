const renderer = new PIXI.WebGLRenderer(); 
const options = {width: 500, height: 300}; 
await renderer.init(options); 
await document.getElementById("pixi-canvas").appendChild(renderer.canvas); 

const stage = new PIXI.Container();

// 1. Create your native forest green linear gradient 
const forestGradient = new PIXI.FillGradient({
    type: 'linear',
    start: { x: 0, y: 0 }, 
    end: { x: 0, y: 1 },   
    colorStops: [
        { offset: 0, color: 0x218C21 }, // Light Forest Green
        { offset: 1, color: 0x052605 }  // Dark Pine Green
    ]
});

// 2. Draw your square shape using the gradient fill
const gradientShape = new PIXI.Graphics()
    .rect(0, 0, 100, 100)
    .fill(forestGradient);

// Move the starting coordinates to the center vertically
gradientShape.y = 100;
stage.addChild(gradientShape); 

// Variables to handle speed direction and ticking time
let speedX = 2; 
let time = 0;

// 3. The animation loop handles frame-by-frame movement
function animate() {
  time += 0.05;

  // Horizontal Movement (Bounces off the canvas walls)
  gradientShape.x += speedX;
  if (gradientShape.x > 400 || gradientShape.x < 0) {
      speedX *= -1; // Flips direction when reaching the border edge
  }

  // Subtle vertical floating wave motion
  gradientShape.y = 100 + Math.sin(time) * 15;

  renderer.render(stage);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
