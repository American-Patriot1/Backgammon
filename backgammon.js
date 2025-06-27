const canvas = document.getElementById('backgammonCanvas');
const ctx = canvas.getContext('2d');


// Define canvas dimensions
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;


const squareSize = 20;
const numRows = canvasHeight / squareSize;
const numCols = canvasWidth / squareSize;

function drawBoard() {
    
    // for (let row = 0; row < numRows; row++) {
    //     for (let col = 0; col < numCols; col++) {
    //         const color = (row + col) % 2 === 0 ? 'DarkGrey' : 'Grey';
    //         ctx.fillStyle = color;
    //         ctx.fillRect(col * squareSize, row * squareSize, squareSize, squareSize);
    //     }
    // }
    for (let amt = 0; amt<=25; amt++){
        let spikeTopPosition = 120;
        let spikeBottomPosition = 0;
        let reset=0
        if((amt>12)){
            spikeTopPosition = 180;
            spikeBottomPosition = 300;
            reset=325
        }
        ctx.beginPath();
        let num=amt%2;
        console.log(num);
        if(amt%2==1){
            ctx.fillStyle = "#020215";
        }else if(amt%2==0){
            ctx.fillStyle = "white";
        }
        ctx.moveTo(40+(amt*25)-reset, spikeBottomPosition);
        ctx.lineTo(50+(amt*25)-reset, spikeTopPosition);
        ctx.lineTo(60+(amt*25)-reset, spikeBottomPosition);
        ctx.lineTo(40+(amt*25)-reset, spikeBottomPosition);
        ctx.fill();
        ctx.fillStyle = "#020215";
        ctx.fillRect(190, 0, 20, 300);
        ctx.fillRect(20, 0, 15, 300);
        ctx.fillRect(365, 0, 15, 300);
        ctx.fillRect(0, 100, 20, 100);
        ctx.fillRect(380, 100, 20, 100);
    }
}

function gameLoop(currentTime) {
    const deltaTime = currentTime - lastTime;


    if (deltaTime >= gameSpeed) {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        drawBoard();


        // aple.relocate();
        lastTime = currentTime;
    }


    requestAnimationFrame(gameLoop);
}

let gameSpeed=200;
let lastTime=0;
drawBoard();
gameLoop(0,0,1);