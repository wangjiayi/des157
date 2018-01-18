
// function setup(){
//   var myCanvas = createCanvas(window.innerWidth, 200);
//   myCanvas.parent('mySketch');
//   background(155);
// }

// function draw(){
//   stroke(50);
//   fill(0);
//   for(var i = 50; i < 400; i += 50){
//      makeParticles(2, touchX, touchY);
//   }
//   if(mouseIsPressed){
//     fill(255);
//     makeParticles(2, touchX, touchY);
//   }
// }

function setup() {
    var myCanvas = createCanvas(800, 250);
    myCanvas.parent('mySketch');   
}
function draw() {  
    var Color_1 = random(255);
    var Color_2 = random(255);
    var Color_3 = random(255);
    var alphaColor = random(500); 
    var s = random(20);
    fill(Color_1,Color_2,Color_3,alphaColor);
    rect(mouseX, mouseY, s, s);
    if(mouseIsPressed){
      fill(Color_1,Color_2,Color_3,alphaColor);
      ellipse(mouseX, mouseY, s+20, s+20);
    }
    
}
