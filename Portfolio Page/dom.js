// Malachi Harris
// 2-3-24

//var equal to the div
var myDiv = document.querySelector('#targetDiv');



//loop that creates a <p> element with text & puts it inside target div in each iteration for 5 iterations
for(let i = 0; i < 5; i++)
{
    var paragraph = document.createElement('p');
    paragraph.textContent = "Jerald Jacob Myer saw a strange slippery snake sneak slowly " +
                            "through the sunset soaked scenerey.";
    myDiv.appendChild(paragraph);
}



//funtion that changes div BG color and body BG color to two seperate colors, and text to readable color
function backgroundColor()
{
        document.body.style.backgroundColor = "blue";
        document.body.style.color = "rgb(244,244,244)";

        myDiv.style.backgroundColor = "purple";
        myDiv.style.color = "rgb(244,244,244)";
        myDiv.style.outlineColor = "green";
}




// I used JS to create the button 
var button = document.createElement('button'); 
button.textContent = 'background change'; 
button.style.display = 'block';
button.style.margin = '0 auto';


//add button to page
var topDiv = document.getElementById('topDiv');
topDiv.appendChild(button);

//On click attribut runs backgroundColor function
button.onclick = backgroundColor;










