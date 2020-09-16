function initinit(numPlayers) {
  // set up scores
  for (var i = 0; i < numPlayers; i++) {
    var p = document.createElement("p");
    p.setAttribute("id",i);
    p.innerHTML = "0";
    var newCell = document.getElementById("scorekeep").insertCell(-1);
    newCell.setAttribute("class","score");
    newCell.appendChild(p);
  }
  //set tables up
  for (var i = 0; i < numPlayers; i++) {
    var row = document.getElementById("wrapper");
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    var tr = document.createElement("tr");
    for (var j = 0; j < 4; j++) {
      var td = document.createElement("td");
      var newCanvas = document.createElement("canvas");
      newCanvas.setAttribute("id","p"+i+"a"+j);
      if (j == 0 || j == 3) {
        newCanvas.setAttribute("class","horizontal");
      } else {
        newCanvas.setAttribute("class","vertical");
      }
      td.appendChild(newCanvas);
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
    table.appendChild(tbody);
    var newCell = row.insertCell(-1);
    newCell.setAttribute("width",window.innerWidth/numPlayers)
    newCell.appendChild(table);
    init(i);
  }
  // set canvas settings correctly
  document.getElementsByTagName("body")[0].setAttribute("style","background-image:url('background.png')");
  var canvases = document.getElementsByTagName("canvas");
  for (var i = 0; i < canvases.length; i++) {
    canvases[i].height = 1200;
    canvases[i].width = 125;
  }
  var verticals = document.getElementsByClassName("vertical");
  for (var i = 0; i < verticals.length; i++) {
    verticals[i].width = 100;
  }
  // set time for each arrow to be hit
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
  for (var i = 0; i < upHolds.length; i++) {
    upHolds[i][0] += time;
    upHolds[i][1] += time;
  }
  for (var i = 0; i < downHolds.length; i++) {
    downHolds[i][0] += time;
    downHolds[i][1] += time;
  }
  for (var i = 0; i < leftHolds.length; i++) {
    leftHolds[i][0] += time;
    leftHolds[i][1] += time;
  }
  for (var i = 0; i < rightHolds.length; i++) {
    rightHolds[i][0] += time;
    rightHolds[i][1] += time;
  }
  // update which arrows should be on-screen
  function updateArrows() {
    var date = new Date();
    var time = date.getTime();
    // normal
    if (downStart != down.length) {
      if (down[downStart] < time-100) {
        downStart++;
      }
    }
    if (downEnd != down.length) {
      if (down[downEnd] > time && down[downEnd]-time < timeToTravel) {
        downEnd++;
      }
    }
    if (upStart != up.length) {
      if (up[upStart] < time-100) {
        upStart++;
      }
    }
    if (upEnd != up.length) {
      if (up[upEnd] > time && up[upEnd]-time < timeToTravel) {
        upEnd++;
      }
    }
    if (leftStart != left.length) {
      if (left[leftStart] < time-100) {
        leftStart++;
      }
    }
    if (leftEnd != left.length) {
      if (left[leftEnd] > time && left[leftEnd]-time < timeToTravel) {
        leftEnd++;
      }
    }
    if (rightStart != right.length) {
      if (right[rightStart] < time-100) {
        rightStart++;
      }
    }
    if (rightEnd != right.length) {
      if (right[rightEnd] > time && right[rightEnd]-time < timeToTravel) {
      rightEnd++;
      }
    }
    // holds

    if (upHoldStart != upHolds.length) {
      if (upHolds[upHoldStart][0] < time-(upHolds[upHoldStart][1] - upHolds[upHoldStart][0])-100) {
        upHoldStart++;
      }
    }
    if (upHoldEnd != upHolds.length) {
      if (upHolds[upHoldEnd][1] > time && upHolds[upHoldEnd][1]-time < timeToTravel) {
        upHoldEnd++;
      }
    }
    if (downHoldStart != downHolds.length) {
      if (downHolds[downHoldStart][0] < time-(downHolds[downHoldStart][1] - downHolds[downHoldStart][0])-100) {
        downHoldStart++;
      }
    }
    if (downHoldEnd != downHolds.length) {
      if (downHolds[downHoldEnd][1] > time && downHolds[downHoldEnd][1]-time < timeToTravel) {
        downHoldEnd++;
      }
    }
    if (leftHoldStart != leftHolds.length) {
      if (leftHolds[leftHoldStart][0] < time-(leftHolds[leftHoldStart][1] - leftHolds[leftHoldStart][0])-100) {
        leftHoldStart++;
      }
    }
    if (leftHoldEnd != leftHolds.length) {
      if (leftHolds[leftHoldEnd][1] > time && leftHolds[leftHoldEnd][1]-time < timeToTravel) {
        leftHoldEnd++;
      }
    }
    if (rightHoldStart != rightHolds.length) {
      if (rightHolds[rightHoldStart][0] < time-(rightHolds[rightHoldStart][1] - rightHolds[rightHoldStart][0])-100) {
        rightHoldStart++;
      }
    }
    if (rightHoldEnd != rightHolds.length) {
      if (rightHolds[rightHoldEnd][1] > time && rightHolds[rightHoldEnd][1]-time < timeToTravel) {
        rightHoldEnd++;
      }
    }
  }
  setInterval(updateArrows,updateInterval);
}
function init(playerNum) {
  function placeHolder0() {
    drawLeftColumn("p"+playerNum+"a0");
  }
  setInterval(placeHolder0,updateInterval);
  function placeHolder1() {
    drawDownColumn("p"+playerNum+"a1");
  }
  setInterval(placeHolder1,updateInterval);
  function placeHolder2() {
    drawUpColumn("p"+playerNum+"a2");
  }
  setInterval(placeHolder2,updateInterval);
  function placeHolder3() {
    drawRightColumn("p"+playerNum+"a3");
  }
  setInterval(placeHolder3,updateInterval);
}
function drawUpColumn(canvasId) {
  var date = new Date();
  var time = date.getTime();
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext("2d");
  ctx.save();
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.rotate(Math.PI * 3 / 2);
  ctx.font = font;
  ctx.fillStyle = "#6188ff";
  drawUp(ctx,0,true,false);
  for (var i = upStart; i < upEnd; i++) {
    var distance = canvas.height*((time-up[i])/timeToTravel);
    drawUp(ctx,distance,false,false);
  }
  for (var i = upHoldStart; i < upHoldEnd; i++) {
    for (var j = upHolds[i][1]; j >= upHolds[i][0] && j-time < timeToTravel; j -= 20) {
      var distance = canvas.height*((time-j)/timeToTravel);
      drawUp(ctx,distance,false,true);
    }
    var distance = canvas.height*((time-upHolds[i][0])/timeToTravel);
    drawUp(ctx,distance,false,false);
  }
  ctx.restore();
}
function drawDownColumn(canvasId) {
  var date = new Date();
  var time = date.getTime();
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext("2d");
  ctx.save();
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.rotate(Math.PI / 2);
  ctx.font = font;
  ctx.fillStyle = "#ffe461";
  drawDown(ctx,0,true,false);
  for (var i = downStart; i < downEnd; i++) {
    var distance = canvas.height*((time-down[i])/timeToTravel);
    drawDown(ctx,distance,false,false);
  }
  for (var i = downHoldStart; i < downHoldEnd; i++) {
    for (var j = downHolds[i][1]; j >= downHolds[i][0] && j-time < timeToTravel; j -= 20) {
      var distance = canvas.height*((time-j)/timeToTravel);
      drawDown(ctx,distance,false,true);
    }
    var distance = canvas.height*((time-downHolds[i][0])/timeToTravel);
    drawDown(ctx,distance,false,false);
  }
  ctx.restore();
}
function drawLeftColumn(canvasId) {
  var date = new Date();
  var time = date.getTime();
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext("2d");
  ctx.save();
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.rotate(Math.PI);
  ctx.font = font;
  ctx.fillStyle = "#ff6363";
  drawLeft(ctx,0,true,false);
  for (var i = leftStart; i < leftEnd; i++) {
    var distance = canvas.height*((time-left[i])/timeToTravel);
    drawLeft(ctx,distance,false,false);
  }
  for (var i = leftHoldStart; i < leftHoldEnd; i++) {
    for (var j = leftHolds[i][1]; j >= leftHolds[i][0] && j-time < timeToTravel; j -= 20) {
      var distance = canvas.height*((time-j)/timeToTravel);
      drawLeft(ctx,distance,false,true);
    }
    var distance = canvas.height*((time-leftHolds[i][0])/timeToTravel);
    drawLeft(ctx,distance,false,false);
  }
}
function drawRightColumn(canvasId) {
  var date = new Date();
  var time = date.getTime();
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext("2d");
  ctx.save();
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.font = font;
  ctx.fillStyle = "#6fff62";
  drawRight(ctx,0,true,false);
  for (var i = rightStart; i < rightEnd; i++) {
    var distance = canvas.height*((time-right[i])/timeToTravel);
    drawRight(ctx,distance,false,false);
  }
  for (var i = rightHoldStart; i < rightHoldEnd; i++) {
    for (var j = rightHolds[i][1]; j >= rightHolds[i][0] && j-time < timeToTravel; j -= 20) {
      var distance = canvas.height*((time-j)/timeToTravel);
      drawRight(ctx,distance,false,true);
    }
    var distance = canvas.height*((time-rightHolds[i][0])/timeToTravel);
    drawRight(ctx,distance,false,false);
  }
  ctx.restore();
}
function drawUp(ctx,yPos,head,holding) {
  ctx.translate(yPos-fontSize,75)
  if (!head) {
    ctx.fillText("➜",0,0);
  }
  if (!holding) {
    ctx.strokeStyle = arrowBorderColour;
    ctx.lineWidth = arrowBorderWidth;
    ctx.strokeText("➜",0,0);
  } else {
    ctx.strokeStyle = arrowBorderColour;
    ctx.lineWidth = 2;
    ctx.strokeText("➜",0,0);
  }
  ctx.translate(-yPos+fontSize,-75);
}
function drawDown(ctx,yPos,head,holding) {
  ctx.translate(-yPos+2,-2);
  if (!head) {
    ctx.fillText("➜",0,0);
  }
  if (!holding) {
    ctx.strokeStyle = arrowBorderColour;
    ctx.lineWidth = arrowBorderWidth;
    ctx.strokeText("➜",0,0);
  } else {
    ctx.strokeStyle = arrowBorderColour;
    ctx.lineWidth = 2;
    ctx.strokeText("➜",0,0);
  }
  ctx.translate(yPos-2,2);
}
function drawRight(ctx,yPos,head,holding) {
  ctx.translate(2,-yPos+fontSize-25);
  if (!head) {
    ctx.fillText("➜",0,0);
  }
  if (!holding) {
    ctx.strokeStyle = arrowBorderColour;
    ctx.lineWidth = arrowBorderWidth;
    ctx.strokeText("➜",0,0);
  } else {
    ctx.strokeStyle = arrowBorderColour;
    ctx.lineWidth = 2;
    ctx.strokeText("➜",0,0);
  }
  ctx.translate(-2,yPos-fontSize+25);
}
function drawLeft(ctx,yPos,head,holding) {
  ctx.translate(-fontSize-5,-2+yPos);
  if (!head) {
    ctx.fillText("➜",0,0);
  }
  if (!holding) {
    ctx.strokeStyle = arrowBorderColour;
    ctx.lineWidth = arrowBorderWidth;
    ctx.strokeText("➜",0,0);
  } else {
    ctx.strokeStyle = arrowBorderColour;
    ctx.lineWidth = 2;
    ctx.strokeText("➜",0,0);
  }
  ctx.translate(fontSize+5,2-yPos);
}
 function keyHit(event) {
//   var key = event.keyCode;
//   key -= 65;
//   var player = NULL;
//   var arrow = NULL;
//   for (var i = 0; i < 4; i++) {
//     for (var j = 0; j < 4; j++) {
//       if (i + j == key) {
//         player = i;
//         arrow = j;
//         break;
//       }
//     }
//     if (player != NULL) {
//       break;
//     }
//   }
//   if (player == NULL) {
//     return 0;
//   }
//   var p0 = document.getElementById('0');
//   var p1 = document.getElementById('1');
//   var p2 = document.getElementById('2');
//   var p3 = document.getElementById('3');
//   var date = new Date();
//   var time = date.getTime();
//   switch (arrow) {
//     case 0:
//       for (var i = leftStart; i < leftEnd; i++) {
//         if (left[i]-250 < time && time < left[i]+250) {
//
//         }
//       }
//       break;
//     default: return 0;
//
//   }
}
