let readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

class Game {
    constructor(){
        this.towers = [[1,2,3], [], []];

    }
    promptMoves(callback){
        this.print();
        rl.question("Pick up disc from: " , (answer) => {
            const startIdx = ${answer};
        rl.question("Move to tower: ") , (answer) => {
            const endTowerIdx =;
            callback(startIdx, endTowerIdx)
        }
        });
    }
    isValidMove(startIdx, endIdx){
        let startIdx = this.towers[startIdx];
        let endIdx =  this.towers[endIdx];
        if(startIdx === 0 || startIdx > 3 ){
            console.log("Not a valid move")
        if(endIdx === 0 || endIdx > 3){
            console.log("Not a valid move")
        } else if(startIdx > 0){
            this.tower[startIdx - 1] + this.tower[endIdx + 1]
        }
        }

    }
    move(){
        if(!this.move === isValidMove){
            console.log("Not a valid move")
        } else if(this.move === this.isValidMove(startIdx, endIndx)){
            this.towers[endIdx].push(this.towers[startIdx].pop())
        }
    }
    print(){
        console.log(JSON.stringify(this.move))
    }
    isWon(){
        if(this.towers[0] === 3 || this.tower[1] === 3 || this.tower[2]){
            console.log("You have WON the game!")
        } else {
            this.promptMoves()
        }
    }
}