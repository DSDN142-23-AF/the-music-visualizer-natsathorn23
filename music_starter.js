
function draw_one_frame(words, vocal, drum, bass, other) {
  
  background(173, 72, 250);
  rectMode(CENTER);
  strokeWeight(0)
  stroke(235, 149, 52);
 
  var totalWidth = 9 * 9; // Total width of all ellipses
 var centerX = (width - totalWidth) / 2;
 
   var drumMap =map(drum, 0,100, 80,10);
  var vocalMap =map(vocal, 0, 100, 300,380);
  var vocalMap2 =map(vocal, 0, 100, 200, 280);
  var vocalMap3 =map(vocal, 0, 100, 100, 180);
  var bassMapX =map(vocal, 0, 100, 400,300);
  var bassMapY =map(vocal, 0, 100, 300,400);
  //var bassMapY1 =map(bass, 0, 100, 200,150);
  //var ballSize =map (bass, 0, 100, 90, 200);
  var drumX = map(bass, 0, 100, 100, 200);
  var drumMapX = map(bass, 0, 100, 80, 130);
  var drumMapY = map(bass, 0, 100, 80, 130);
  var drumMapX2 = map(bass, 0, 100, 50, 100);
  var drumMapY2 = map(bass, 0, 100, 50, 100);
  var drumY = map(bass, 0, 100, 100, 200);
  var bassX = map(bass, 0, 100, 700, 500);
  var bassX2 = map(bass, 0, 100, 600, 400); 
  var bassX3 = map(bass, 0, 100, 500, 300);
  var bassX4 = map(bass, 0, 100, 400, 200);
  //rect var
  var drumX2 = map(drum, 0, 100, 150, 50);
  var drumX3 = map(drum, 0, 100, 220, 50);
  var drumX4 = map(drum, 0, 100, 290, 50);
  var drumX5 = map(drum, 0, 100, 360, 50);
  
  //background 1
  fill(155, 72, 250)
  rect(400,300,bassX,500)
  
  fill(125, 72, 250)
  rect(400,300,bassX2,400)
  
  fill(108, 72, 250)
  rect(400,300,bassX3,300)

  fill(75, 72, 250)
  rect(400,300,bassX4,200)

  //rect
  fill(160, 72, 250)
  rect(400, 400, drumX2, 150)

  fill(145, 72, 250)
  rect(400, 475, drumX3, 50)

  fill(108, 72, 250)
  rect(400, 525, drumX4, 50)

  fill(75, 72, 250)
  rect(400, 575, drumX5, 50)

  //rect2
  fill(160, 72, 250)
  rect(400, 175, drumX2, 150)

  fill(145, 72, 250)
  rect(400, 125, drumX3, 50)

  fill(108, 72, 250)
  rect(400, 75, drumX4, 50)

  fill(75, 72, 250)
  rect(400, 25, drumX5, 50)


   //middle ring
  fill(118, 72, 217)
 ellipse(400, 300, bassMapX, 300)


  fill(118, 72, 217)
  ellipse(400, 300, 300,bassMapY)
 
  //fill(171, 51, 155)
  //ellipse(400, 300,vocalMap,340)

  fill(100, 61, 184)
  ellipse(400, 300,240,vocalMap2)

   fill(75, 45, 138)
  ellipse(400, 300,vocalMap3,140)
  
  // outer ring 1
  fill(118, 72, 217)
  ellipse(100, 100, drumX, drumY)

  fill(100, 61, 184)
  ellipse(100, 100, drumMapX, drumMapY)

  fill(75, 45, 138)
  ellipse(100, 100, drumMapX2, drumMapY2)

  // outer ring 2
  fill(118, 72, 217)
  ellipse(700, 100, drumX, drumY)

  fill(100, 61, 184)
  ellipse(700, 100, drumMapX, drumMapY)

  fill(75, 45, 138)
  ellipse(700, 100, drumMapX2, drumMapY2)

  // outer ring 3
  fill(118, 72, 217)
  ellipse(700, 500, drumX, drumY)

  fill(100, 61, 184)
  ellipse(700, 500, drumMapX, drumMapY)

  fill(75, 45, 138)
  ellipse(700, 500, drumMapX2, drumMapY2)

  // outering 4
  fill(118, 72, 217)
  ellipse(100, 500, drumX, drumY)

  fill(100, 61, 184)
  ellipse(100, 500, drumMapX, drumMapY)

  fill(75, 45, 138)
  ellipse(100, 500, drumMapX2, drumMapY2)


  fill(216, 175, 250)
 
  for (var ii = 1; ii <= 1; ii++) {
    var yStep = ii * 300;
    for (var i = 1; i <= 1; i++) {
      ellipse(centerX + 40 * i, yStep, drumMap);
    }

 }
}



