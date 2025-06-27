const canvas = document.getElementById('backgammon');
const ctx = canvas.getContext('2d');


// Define canvas dimensions
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

function drawBoard() {
    tx.fillRect(20, 10, 200, 100);
    // for (let row = 0; row < numRows; row++) {
    //     for (let col = 0; col < numCols; col++) {
    //         const color = (row + col) % 2 === 0 ? 'DarkGrey' : 'Grey';
    //         ctx.fillStyle = color;
    //         ctx.fillRect(col * squareSize, row * squareSize, squareSize, squareSize);
    //     }
    // }
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