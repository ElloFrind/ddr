function init(playerNum) {
  var date = new Date();
  var time = date.getTime();
  for (var i = 0; i < up.length; i++) {
    up[i] += time;
  }
  for (var i = 0; i < down.length; i++) {
    down[i] += time;
  }
  for (var i = 0; i < left.length; i++) {
    left[i] += time;
  }
  for (var i = 0; i < right.length; i++) {
    right[i] += time;
  }
  drawUpColumn("p"+playerNum+"a0");
  drawDownColumn("p"+playerNum+"a1");
  drawLeftColumn("p"+playerNum+"a2");
  drawRightColumn("p"+playerNum+"a3");
}
function drawUpColumn(canvasId) {
  drawUp(canvasId,0);
  var date = new Date();
  var time = date.getTime();
  if (up[upStart] < time && upStart != up.length) {
    upStart++;
  }
  if (up[upEnd] > time && up[upEnd]-time < 2000 && upEnd != up.length) {
    upEnd++;
  }
  for (var i = upStart; i < upEnd; i++) {
    
  }
}
function drawDownColumn(canvasId) {
  drawDown(canvasId,0);
}
function drawLeftColumn(canvasId) {
  drawLeft(canvasId,0);
}
function drawRightColumn(canvasId) {
  drawRight(canvasId,0);
}
function drawUp(canvasId,yPos) {
  var ctx = document.getElementById(canvasId).getContext("2d");
  ctx.translate(2,2);
  ctx.lineWidth = 2;
  ctx.moveTo(0,yPos+20);
  ctx.lineTo(25,yPos);
  ctx.lineTo(50,yPos+20);
  ctx.lineTo(50,yPos+25);
  ctx.lineTo(45,yPos+25);
  ctx.lineTo(28,yPos+10);
  ctx.lineTo(28,yPos+50);
  ctx.lineTo(21,yPos+50);
  ctx.lineTo(21,yPos+10);
  ctx.lineTo(5,yPos+25);
  ctx.lineTo(0,yPos+25);
  ctx.lineTo(0,yPos+20);
  ctx.stroke();
  ctx.translate(-2,-2);
}
function drawDown(canvasId,yPos) {
  var ctx = document.getElementById(canvasId).getContext("2d");
  ctx.translate(2,2);
  ctx.lineWidth = 2;
  ctx.moveTo(0,yPos+30);
  ctx.lineTo(25,yPos+50);
  ctx.lineTo(50,yPos+30);
  ctx.lineTo(50,yPos+25);
  ctx.lineTo(45,yPos+25);
  ctx.lineTo(28,yPos+40);
  ctx.lineTo(28,yPos);
  ctx.lineTo(21,yPos);
  ctx.lineTo(21,yPos+40);
  ctx.lineTo(5,yPos+25);
  ctx.lineTo(0,yPos+25);
  ctx.lineTo(0,yPos+30);
  ctx.stroke();
  ctx.translate(-2,-2);
}
function drawRight(canvasId,yPos) {
  var ctx = document.getElementById(canvasId).getContext("2d");
  ctx.translate(2,2);
  ctx.lineWidth = 2;
  ctx.moveTo(30,yPos);
  ctx.lineTo(50,yPos+25);
  ctx.lineTo(30,yPos+50);
  ctx.lineTo(25,yPos+50);
  ctx.lineTo(25,yPos+45);
  ctx.lineTo(40,yPos+28);
  ctx.lineTo(0,yPos+28);
  ctx.lineTo(0,yPos+21);
  ctx.lineTo(40,yPos+21);
  ctx.lineTo(25,yPos+5);
  ctx.lineTo(25,yPos);
  ctx.lineTo(30,yPos);
  ctx.stroke();
  ctx.translate(-2,-2);
}
function drawLeft(canvasId,yPos) {
  var ctx = document.getElementById(canvasId).getContext("2d");
  ctx.translate(2,2);
  ctx.lineWidth = 2;
  ctx.moveTo(20,yPos);
  ctx.lineTo(0,yPos+25);
  ctx.lineTo(20,yPos+50);
  ctx.lineTo(25,yPos+50);
  ctx.lineTo(25,yPos+45);
  ctx.lineTo(10,yPos+28);
  ctx.lineTo(50,yPos+28);
  ctx.lineTo(50,yPos+21);
  ctx.lineTo(10,yPos+21);
  ctx.lineTo(25,yPos+5);
  ctx.lineTo(25,yPos);
  ctx.lineTo(20,yPos);
  ctx.stroke();
  ctx.translate(-2,-2);
}
