const renderer = new PIXI.WebGLRenderer(); // You should be able to use PIXI.Application() too.
const options = {width: 500, height: 300}; // Make it any reasonable size you want.
await renderer.init(options); //passing the initializing options we made above to the renderer, and initializing em.
await document.getElementById("pixi-canvas").appendChild(renderer.canvas); //here is where we slap the canvas on.

const stage = new PIXI.Container(); //if you use PIXI.Application(), that already has a "stage" & you use that.
const sprite = new PIXI.Sprite(renderer.generateTexture(new PIXI.Graphics().beginFill(0X00CCaFF, 1).drawRect(0,0,100,100).endFill()));
stage.addChild(sprite); //adding the new sprite to the stage (like dragging a node child to node parent)

renderer.render(stage); //adding stage to the renderer canvas to be drawn (like adding a node to cocos's Canvas node)

// this function is like a "time" function that continuously runs. The game engine's ticker. This is PIXI's.
function animate() {
  renderer.render(stage);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate); // when we call the ticker, if you have animating elements, they'll animate. Else its just a still image.
```
