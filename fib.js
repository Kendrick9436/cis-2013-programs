//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
	var intCount, i, j, k, stringOutput
    
    intCount = parseInt($("total_fib").value); 
	
	
	 i=0; 
	 j=1;  
	 stringOutput = i + " " + j;

     if(isNaN(intCount) || intCount<1 || intCount>100)
    {
        $("total_fib").value = "{lease enter valid input";
          alert("You must enter a number between 1 and 100");
    }
    else
    {
        while (intCount >2)
        {
           k=i+j;
           i=j;
           j=k;
           intCount--;
           stringOutput = stringOutput + " " + k;
        }
        $("output").value = stringOutput;
    }
 } 

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
}  