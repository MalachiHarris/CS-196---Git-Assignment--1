var SomeArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];


let entryContainer = document.querySelector(".central_box");




function update(){
	
		// entryContainer.textContent = ""; 
		let updateString = SomeArray.reduce((accumulator, elemValue, elemIndex) => {
			
			return accumulator + (elemIndex+1) + ". " + elemValue + "<br>";
		}, "")
		
		entryContainer.innerHTML = updateString; 
}

update();



var button = document.getElementById("push_button");
button.addEventListener("click",() => {
		push();
});

function push(){
		let inputTextbox = document.getElementById("user_input");
		const userInput = inputTextbox.value;
		
		SomeArray.push(userInput);
		update();
}



button = document.getElementById("pop_button");
button.addEventListener("click", () => {
	pop();
});

function pop() {
		SomeArray.pop();
		update();
}


var button = document.getElementById("unshift_button");
button.addEventListener("click",() => {
		unshift();
});

function unshift(){
		let inputTextbox = document.getElementById("user_input");
		const userInput = inputTextbox.value;
		
		SomeArray.unshift(userInput);
		update();
}



button = document.getElementById("shift_button");
button.addEventListener("click", () => {
	shift();
});

function shift() {
		SomeArray.shift();
		update();
}



button = document.getElementById("map_button");
button.addEventListener("click", () => {
	arrMap();
});

function arrMap() {
		let inputTextbox = document.getElementById("user_input");
		const userInput = inputTextbox.value;
		
		let mappedArray = SomeArray.map((currentElem) => {
			let newValue =  userInput + currentElem;
			return newValue;
		});
		
		SomeArray = mappedArray;
		update();
}