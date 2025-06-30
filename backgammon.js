const canvas = document.getElementById('backgammonCanvas');
const ctx = canvas.getContext('2d');


// Define canvas dimensions
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;


const squareSize = 20;
const numRows = canvasHeight / squareSize;
const numCols = canvasWidth / squareSize;

function drawBoard() {
    
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            const color = (row + col) % 2 === 0 ? 'DarkGrey' : 'Grey';
            ctx.fillStyle = color;
            ctx.fillRect(col * squareSize, row * squareSize, squareSize, squareSize);
        }
    }
    for (let amt = 0; amt<=25; amt++){
        let spikeTopPosition = 200;
        let spikeBottomPosition = 80;
        let reset=0
        if((amt>12)){
            spikeTopPosition = 260;
            spikeBottomPosition = 380;
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
    }
        ctx.fillStyle = "#020215";
        ctx.fillRect(0, 60, 400, 20);
        ctx.fillRect(0, 380, 400, 20);
        ctx.fillRect(190, 80, 20, 300);
        ctx.fillRect(24, 80, 11, 300);
        ctx.fillRect(365, 80, 11, 300);
        ctx.fillRect(0, 180, 24, 100);
        ctx.fillRect(376, 180, 24, 100);
        ctx.fillStyle = "#500000";
        ctx.fillRect(0, 80, 24, 100);
        ctx.fillRect(376, 200, 24, 20);
        ctx.fillRect(0, 0, 400, 60);
        ctx.fillStyle = "#0b104e";
        ctx.fillRect(0, 280, 24, 100);
        ctx.fillRect(376, 240, 24, 20);
        ctx.fillRect(0, 400, 400, 60);
        ctx.fillStyle = "#020215";
        ctx.fillRect(180, 0, 40, 60);
        ctx.fillRect(180, 400, 40, 60);
}


class Pieces{
    constructor(){
        this.redPieces = [];
        this.bluePieces = [];
        let positions = [
            [50,92,"b"],[50,116,"b"],[50,140,"b"],[50,164,"b"],[50,188,"b"],[150,368,"b"],[150,344,"b"],[150,320,"b"],
            [50,368,"r"],[50,344,"r"],[50,320,"r"],[50,296,"r"],[50,272,"r"],[150,92,"r"],[150,116,"r"],[150,140,"r"],
            [225,92,"r"],[225,116,"r"],[225,140,"r"],[225,164,"r"],[225,188,"r"],[350,368,"r"],[350,344,"r"],
            [225,368,"b"],[225,344,"b"],[225,320,"b"],[225,296,"b"],[225,272,"b"],[350,92,"b"],[350,116,"b"]
        ];
        for(let i=0; i<positions.length;i++){
            if(positions[i][2]=="b"){
                this.bluePieces.push(new Piece(positions[i][0],positions[i][1],positions[i][2]));
            }else if(positions[i][2]=="r"){
                this.redPieces.push(new Piece(positions[i][0],positions[i][1],positions[i][2]));
            }
        }
        this.drawPieces();
    }
    drawPieces(){
        for(let i=0; i<(this.bluePieces.length);i++){
            this.bluePieces[i].drawPiece();
            this.redPieces[i].drawPiece()
        }
    }
}
class Piece{
    constructor(locationX,locationY,color){
        this.locationX=locationX
        this.locationY=locationY
        this.color=color
        this.drawPiece()
    }
    drawPiece(){
        if(this.color == "r"){
            ctx.fillStyle = "#500000";
        }else if(this.color == "b"){
            ctx.fillStyle = "#0b104e";
        }
        ctx.beginPath();
        ctx.arc(this.locationX,this.locationY,12,0,2*Math.PI);
        ctx.fill();
    }
}
class Game{
    constructor(){
        this.turn="indeterminate";
        this.rolls=[];
        this.moves=[];
        this.redStartRoll=0;
        this.blueStartRoll=0;
        this.notRolling=true;
    }
    dice(){
        if(this.turn=="indeterminate"){
            if(this.notRolling==true){
            ctx.fillStyle = "#500000";
            ctx.fillRect(80, 200, 60, 60);
            ctx.fillStyle = "white";
            ctx.fillRect(85, 205, 50, 50);
            ctx.fillStyle = "#0b104e";
            ctx.fillRect(260, 200, 60, 60);
            ctx.fillStyle = "white";
            ctx.fillRect(265, 205, 50, 50);
            ctx.fillStyle = "#000000";
            ctx.font = "18px arial";
            ctx.fillText("Click", 90, 219);
            ctx.fillText("to", 103, 237);
            ctx.fillText("roll", 98, 254);
            ctx.fillText("Click", 270, 219);
            ctx.fillText("to", 283, 237);
            ctx.fillText("roll", 278, 254);
            }
        }else if(this.turn=="red"){
            if(this.notRolling==true){
            ctx.fillStyle = "white";
            ctx.fillRect(285, 5, 50, 50);
            ctx.fillRect(65, 5, 50, 50);
            ctx.fillStyle = "#000000";
            ctx.font = "18px arial";
            ctx.fillText("Click", 290, 19);
            ctx.fillText("to", 303, 37);
            ctx.fillText("roll", 298, 54);
            ctx.fillText("Click", 70, 19);
            ctx.fillText("to", 83, 37);
            ctx.fillText("roll", 78, 54);
            }
        }else if(this.turn=="blue"){
            if(this.notRolling==true){
            ctx.fillStyle = "white";
            ctx.fillRect(285, 405, 50, 50);
            ctx.fillRect(65, 405, 50, 50);
            ctx.fillStyle = "#000000";
            ctx.font = "18px arial";
            ctx.fillText("Click", 290, 419);
            ctx.fillText("to", 303, 437);
            ctx.fillText("roll", 298, 454);
            ctx.fillText("Click", 70, 419);
            ctx.fillText("to", 83, 437);
            ctx.fillText("roll", 78, 454);
            }
        }
    }
    move(){
        if((this.turn=="blue") && (this.notRolling==false)){
            if(this.moves.length==2){
                ctx.fillStyle = "white";
                ctx.fillRect(285, 405, 50, 50);
                ctx.fillRect(65, 405, 50, 50);
                ctx.fillStyle = "#000000";
                ctx.font = "48px arial";
                ctx.fillText(this.moves[0], 76, 449);
                ctx.fillText(this.moves[1], 296, 449);
            }else if(this.moves.length==4){
                ctx.fillStyle = "white";
                ctx.fillRect(225, 405, 50, 50);
                ctx.fillRect(5, 405, 50, 50);
                ctx.fillRect(345, 405, 50, 50);
                ctx.fillRect(125, 405, 50, 50);
                ctx.fillStyle = "#000000";
                ctx.font = "48px arial";
                ctx.fillText(this.moves[0], 16, 449);
                ctx.fillText(this.moves[1], 136, 449);
                ctx.fillText(this.moves[2], 236, 449);
                ctx.fillText(this.moves[3], 356, 449);
            }
        }else if((this.turn=="red") && (this.notRolling==false)){
            if(this.moves.length==2){
                ctx.fillStyle = "white";
                ctx.fillRect(285, 5, 50, 50);
                ctx.fillRect(65, 5, 50, 50);
                ctx.fillStyle = "#000000";
                ctx.font = "48px arial";
                ctx.fillText(this.moves[0], 76, 49);
                ctx.fillText(this.moves[1], 296, 49);
            }else if(this.moves.length==4){
                ctx.fillStyle = "white";
                ctx.fillRect(225, 5, 50, 50);
                ctx.fillRect(5, 5, 50, 50);
                ctx.fillRect(345, 5, 50, 50);
                ctx.fillRect(125, 5, 50, 50);
                ctx.fillStyle = "#000000";
                ctx.font = "48px arial";
                ctx.fillText(this.moves[0], 16, 49);
                ctx.fillText(this.moves[1], 136, 49);
                ctx.fillText(this.moves[2], 236, 49);
                ctx.fillText(this.moves[3], 356, 49);
            }
        }
    }
}

function gameLoop(currentTime) {
    const deltaTime = currentTime - lastTime;


    if (deltaTime >= gameSpeed) {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        drawBoard();
        pieces1.drawPieces();
        gam.dice();
        gam.move();

        // aple.relocate();
        lastTime = currentTime;
    }


    requestAnimationFrame(gameLoop);
}
const gam=new Game();
const pieces1=new Pieces();
let gameSpeed=200;
let lastTime=0;
drawBoard();
gameLoop(0,0,1);