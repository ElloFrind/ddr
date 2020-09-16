var totalMoved = 1;
function movePic(playerNum) {
  for (var i = 0; i < playerNum; i++) {
    var ctx = document.getElementById("p" + i).getContext("2d");
    ctx.clearRect(0,0,800,1000);
    ctx.drawImage(document.getElementById("headings"),5,1,800,200);
    ctx.translate(0,-totalMoved);
    ctx.drawImage(document.getElementById("layout"),5,1,280,210);
    ctx.translate(0,totalMoved);
  }
  totalMoved++;
  console.log(totalMoved);
  if (totalMoved > 300 + parseInt(document.getElementById("layout").getAttribute("height"))) {
    // load next screen
  }
}
function init(playerNum) {
  var row = document.getElementById("canvases");
  for (var i = 0; i < playerNum; i++) {
    var newCell = row.insertCell(-1);
    newCell.innerHTML = "<canvas width=800 height=1000 id='p" + i + "'></canvas>";
    var ctx = document.getElementById("p" + i).getContext("2d");
    ctx.drawImage(document.getElementById("headings"),5,1,800,200);
    ctx.drawImage(document.getElementById("layout"),5,1,280,210);
  }
  function inner() {
    movePic(playerNum);
  }
  setInterval(inner,10);
}
