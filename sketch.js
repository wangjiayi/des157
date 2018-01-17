
function setup(){
  var myCanvas = createCanvas(window.innerWidth, 400);
  myCanvas.parent('mySketch');
  background(155);
}
function draw(){
  stroke(50);
  fill(0);
  for(var i = 50; i < 400; i += 50){
    ellipse(i,i,50,50);
  }
  if(mouseIsPressed){
    fill(255);
    ellipse(mouseX, mouseY, 80, 80);
  }

  // x = x + random(-1,-1);
  // y = y -1;
  // if(y < 0){
  //   y = height;
  // }
  // if(mouseIsPressed){
  //   fill(255);
  //   ellipse(mouseX, mouseY, 80, 80);
  // }else{
  //   fill(0);
  //   stroke(color(0, 0, 255));
  //   strokeWeight(4);
  //   rect(mouseX, mouseY, 60, 60);
  // }
}
