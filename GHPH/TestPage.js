// Malachi Harris
// 1-13-24



//create var, => do some operation on its value
var armadilloCount = 0;
armadilloCount = armadilloCount + 1;




var userEntry = prompt("How many armadillos have you seen?:");


armadilloCount = armadilloCount + parseInt(userEntry, 10);

alert("Together we have seen " + armadilloCount + " armadillos");

console.log("armadilloCount", armadilloCount);
console.log("userEntry", userEntry);
