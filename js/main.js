const renderer = new PIXI.WebGLRenderer(); // You should be able to use PIXI.Application() too.
const options = { width: 500, height: 300 }; // Make it any reasonable size you want.
await renderer.init(options); // passing the initializing options we made above to the renderer, and initializing...
await document.getElementById("pixi-canvas").appendChild(renderer.canvas); // here is where we slap the canvas on.

const stage = new PIXI.Container(); // if you use PIXI.Application(), that already has a "stage" & you use that.

// 1. Create your shape sprite (the blue box you currently have)
const sprite = new PIXI.Sprite(renderer.generateTexture(new PIXI.Graphics().beginFill(0x00CCFF, 1).drawRect(0,0,100,100).endFill()));
stage.addChild(sprite); // adding the new sprite to the stage

// 2. Define the forest green gradient shader (Fragment Shader)
const fragmentSrc = `
    in vec2 vTextureCoord;
    
    void main() {
        // Define light and dark forest green colors (RGB normalized between 0.0 and 1.0)
        vec3 lightForest = vec3(0.13, 0.55, 0.13); 
        vec3 darkForest = vec3(0.02, 0.15, 0.02);  
        
        // Blend colors based on vertical coordinates (y)
        vec3 gradientColor = mix(lightForest, darkForest, vTextureCoord.y);
        
        gl_FragColor = vec4(gradientColor, 1.0);
    }
`;

// 3. Create the filter program and apply it to your sprite
const forestFilter = new PIXI.Filter({
    glProgram: new PIXI.GlProgram({
        fragment: fragmentSrc,
    })
});

// Attach the custom gradient shader to your square sprite
sprite.filters = [forestFilter];

renderer.render(stage); // adding stage to the renderer canvas to be drawn

// this function is like a "time" function that continuously runs. The game engine's ticker. This is PIXI's.
function animate() {
    renderer.render(stage);
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate); // when we call the ticker, if you have animating elements, they'll animate. Else its just a still image.
