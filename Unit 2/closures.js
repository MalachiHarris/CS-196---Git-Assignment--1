var divMoves = document.querySelector(".moves");
var par;

function Game_Character(inName, inHP, ...inMoves) {
    //vars equal to paramers
    var outName = inName;
    var outHP = inHP;
    var outMoves = inMoves;
    
    //return an object w/ three functions
    return {
        //returns HP 
        getHP : function() {
            return outHP;
        },
        //returns name 
        getName : function() {
            return outName;
        },
        //finds .moves div, uses for loop to append 'p' w/ selectMove[] string
        appendMoves : function() {
            var divMoves2 = document.querySelector(".moves");
            for( const selectMove of outMoves){
                par = document.createElement("p");
                par.textContent = selectMove;
                divMoves2.appendChild(par);
            }
        }
    }
}

//create variable equal to Game_character function w/ given parameters
var createChar = Game_Character("#Seven",10, "blamo", "shabang", "dingaroo");

//add name 'p' to divMoves
par = document.createElement("p");
par.textContent = "Name: " + createChar.getName();
divMoves.appendChild(par);

//add hp 'p' to divMoves
par = document.createElement("p");
par.textContent = "HP: " + createChar.getHP();
divMoves.appendChild(par);

//call append moves from 
createChar.appendMoves();

