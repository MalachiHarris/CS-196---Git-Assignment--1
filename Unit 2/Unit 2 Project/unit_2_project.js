/*
        Project: Unit 2 Project
        Name: Malachi Harris
        Class: CSC 196 30 O
        Date:  3/19/24
*/





//tracks the total # of tiles
let totalTileCount = 0;

//class w/ constructor taking parameters that affect its properties
class TileCounter {
    constructor(redCount, blueCount) {
      this.redCount = redCount;
      this.blueCount = blueCount;
    }
    // add to red
    addRed() {
        this.redCount++;
    }
    //add to blue
      addBlue() {
        this.blueCount++;
    }
    //compares blueCount & redCount, returns string describing the outcome
    winner(){
        if(this.redCount > this.blueCount)
        return "red";
        if(this.redCount < this.blueCount)
        return "blue";
        if(this.redCount == this.blueCount)
        return "tie";
    }
  }
//create object from class TileCounter
const tileTrack = new TileCounter(0,0);






//target for following events
var ctr_box = document.querySelector(".central_box");

// 'r' keypress - will add a red tile to the central_box
document.addEventListener("keydown", function(event) {
    // Check if the pressed key is "r"
    if (event.key === "r" && totalTileCount < 25) {
        // Your code to execute when "r" key is pressed goes here
        playTile = document.createElement("div");
        playTile.classList.add("play_tile", "red_tile");
        playTile.textContent = "Red";
        ctr_box.appendChild(playTile);

        tileTrack.addRed();
        totalTileCount++;
    }
});



// 'b' keypress - will add a blue tile to the central_box
document.addEventListener("keydown", function(event) {
    // Check if the pressed key is "b"
    if (event.key === "b" && totalTileCount < 25) {
        // Your code to execute when "b" key is pressed goes here
        playTile = document.createElement("div");
        playTile.classList.add("play_tile", "blue_tile");
        playTile.textContent = "Blue";
        ctr_box.appendChild(playTile);
        
        tileTrack.addBlue();
        totalTileCount++;
    }
});

//button has the tiles"fight" winner keeps remainder
var button = document.getElementById("battle_button");
button.addEventListener("click", function() {



    const result = tileTrack.winner();
    const remainderOfTiles = Math.abs(tileTrack.redCount - tileTrack.blueCount);

    //remove all play tiles, reset count
    const container = document.querySelector('.central_box');
    const playTiles = container.querySelectorAll('.play_tile');
    playTiles.forEach(tile => tile.remove());
    totalTileCount = 0;


    //create tiles for winner = to the remainder, alert user of outcome
    console.log(result);
    switch (result){
        case "red":
            for (i = 0; i < remainderOfTiles; i++){
                let playTile = document.createElement("div");
                playTile.classList.add("play_tile", "red_tile");
                playTile.textContent = "Red";
                ctr_box.appendChild(playTile);

                tileTrack.addRed();
                totalTileCount++;
            }
            alert("red wins, they get to keep the survivors");

        break;
        case "blue":
            for (i = 0; i < remainderOfTiles; i++){
                let playTile = document.createElement("div");
                playTile.classList.add("play_tile", "blue_tile");
                playTile.textContent = "blue";
                ctr_box.appendChild(playTile);

                tileTrack.addBlue();
                totalTileCount++;
            }
            alert("blue wins, they get to keep the survivors");
        break;
        case "tie":
            alert("It was a tie. There were no survivors...")
    }
    
});



