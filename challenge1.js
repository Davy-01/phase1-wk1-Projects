const prompt = require('prompt-sync')();
//Prompt for user to input marks
let marks = prompt("What is your marks?")

//Declare function to assess a student's grade
const studentGrade = function(){
//If and else if to ascertain conditions for Grading  
// Marks entered from the prompt is used to assign the grades to the marks using the conditions.  
    if(marks>79){
        console.log("A")
    }else if(marks>=60 && marks<=79){
        console.log("B")
    }else if(marks>=49 && marks<=59){
        console.log("C")
    }else if(marks>=40 && marks<59){
        console.log("D")
    }
    else if(marks<40){
        console.log("E")
    }
    else {console.log("Invalid Number")}
}

//Invoking the function
studentGrade();

//The function should now console.log one of the conditional statements