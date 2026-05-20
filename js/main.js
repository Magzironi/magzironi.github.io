const renderer = new PIXI.WebGLRenderer(); 
const options = {width: 500, height: 300}; 
await renderer.init(options); 
await document.getElementById("pixi-canvas").appendChild(renderer.canvas); 

const stage = new PIXI.Container();

// 1. Create a dynamic HTML Canvas to manually draw our changing gradient shape
const canvasEl = document.createElement('canvas');
canvasEl.width = 150;
canvasEl.height = 150;
const ctx = canvasEl.getContext('2d');

// 2. Wrap that hidden canvas into a live PixiJS Texture and Sprite
const texture = PIXI.Texture.from(canvasEl);
const shapeSprite = new PIXI.Sprite(texture);
stage.addChild(shapeSprite);

// Set the starting position and anchor center point
shapeSprite.anchor.set(0.5);
shapeSprite.x = 100;
shapeSprite.y = 150;

// Variables to keep track of time and movement paths
let time = 0;
let speedX = 2; 

function animate() {
    time += 0.03; // Controls how fast colors cycle and shapes morph

    // --- TASK 1: MOVE ACROSS THE SCREEN (Bounce back and forth) ---
    shapeSprite.x += speedX;
    if (shapeSprite.x > 425 || shapeSprite.x < 75) {
        speedX *= -1; // Reverse direction when hitting canvas boundaries
    }
    // Subtle float up and down movement
    shapeSprite.y = 150 + Math.sin(time * 2) * 20;

    // --- TASK 2: SHIFT GRADIENT COLORS ---
    // Smoothly shift green values using sine waves (keeps them in a rich forest palette)
    let lightGreenVal = Math.floor(120 + Math.sin(time) * 50); 
    let darkGreenVal = Math.floor(40 + Math.sin(time + 2) * 20);
    
    let color1 = `rgb(20, ${lightGreenVal}, 20)`;
    let color2 = `rgb(5, ${darkGreenVal}, 5)`;

    // Clear the hidden canvas for a fresh frame draw
    ctx.clearRect(0, 0, 150, 150);

    // Create the linear color gradient block
    let gradient = ctx.createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    ctx.fillStyle = gradient;

    // --- TASK 3: MORPH SHAPES (Square to Round Circle Corners) ---
    // Math.abs(Math.sin) oscillates smoothly between 0 (Sharp Square) and 50 (Circle)
    let dynamicCornerRadius = Math.abs(Math.sin(time)) * 50;

    ctx.beginPath();
    ctx.roundRect(10, 10, 130, 130, dynamicCornerRadius);
    ctx.fill();

    // Tell PixiJS to upload the fresh canvas details to the graphics card
    texture.source.update();

    renderer.render(stage);
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
