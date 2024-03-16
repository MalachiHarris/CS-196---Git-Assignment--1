/*
        Project: 7: Async, Await, and Promises
        Name: Malachi Harris
        Class: CSC 196 30 O
        Date:  3/15/24
*/



//2. Create a new async function
async function OneRun(){
    //a. Create two new variables called runner1 and runner 2, both set to false.
    var runner1 = false;
    var runner2 = false;

    var delay1 = Math.floor(Math.random() * (2000)) + 1000;
    var delay2 = Math.floor(Math.random() * (2000)) + 1000;



    //b. Create a loser variable set to an empty string.
    var loser = "";



    //b. Create two new promises called runner1Go and runner2Go.
    //      i. Each promise should have a resolve parameter.
    var runner1Go = new Promise(function(resolve){
        //ii. Each promise should also use the setTimeout() method to set a timeout for an 
        // anonymous function that sets the loser value to runner1 in runner1Go, or runner2 in runner2Go, 
        //then resolves the value true.
        
        setTimeout(function() {
            loser = "runner1";
            resolve(true);
        }, delay1);
    });

    var runner2Go = new Promise(function(resolve){
        setTimeout(function() {
            loser = "runner2";
            resolve(true);
        }, delay2);
    });



    // c. Return an array with the following values: 
    // i. The result of runner1Go (you will need to await this)
    // ii. The result of runner2Go (you will also need to await this)
    // iii. The value of loser (this should come last in the array)

    return[await runner1Go, await runner2Go, loser];
}

//   3. Call the async function from step 2, and use a then clause to run an anonymous function afterwards.
// The anonymous function should take one parameter (which will be the return value of the async function). 
//The function should log the loser to the console. 
//(Hint: This is the last value in the array that you returned from the async function). 
OneRun().then(function(result) { 
    console.log(result)});