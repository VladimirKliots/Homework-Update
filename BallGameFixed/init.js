var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var cvs = document.getElementById('cvs');
cords = [];
count = 0;

function drawBall(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
}

cvs.addEventListener('click', function (event) {

    let index = count;
    count++;

    let x = canvas.width / 2;
    let y = canvas.height / 2;

    let dx = 1;
    let dy = -1;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cords[index] = [x, y];
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = 'black';
        ctx.fill();
        drawBall(x, y);
        if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }
        if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
            dy = -dy;
        }
        x += dx;
        y += dy;
    }

    setInterval(draw, 1);
})


// function drawBall(){
//     ctx.beginPath();
//     ctx.arc(x, y, ballRadius, 0, Math.PI*2);
//     ctx.fillStyle = 'black';
//     ctx.fill();
//     ctx.closePath();
// }
//
// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawBall();
//
//     if(x + dx > canvas.width-ballRadius  || x + dx < ballRadius) {
//         dx = -dx;
//     }
//     if(y + dy > canvas.height-ballRadius  || y + dy < ballRadius) {
//         dy = -dy;
//     }
//     x += dx;
//     y += dy;
// }
//
//
// setInterval(draw, 10);




