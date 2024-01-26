var exampleArray = new Array(5);
[exampleArray[0], exampleArray[1], 
exampleArray[2], exampleArray[3], exampleArray[4] ]
= [1,2,3,4,5] ;

const addThenLog = function(a)
{
    a +=1
    console.log(a);
}

function evenOdd(functionExpression, number)
{
    if (number % 2 == 0)
    {
        functionExpression(number);
    }
    else
    {
        console.log("the number is odd");
    }
}

for ( i in exampleArray)
{
    evenOdd(addThenLog, exampleArray[i]);
}