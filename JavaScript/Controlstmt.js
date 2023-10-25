/* Control Structures in Javascript are used to control the flow of your program.
They allow you to make decisions, create loops and execute code based on conditions.
There are mainly two types of control structures: conditional statements (if, else, switch)
and loops (for, while, do....while).*/

//Conditional Statements

/*
* Conditional Statements allow you to make decisions in your code.

Here are examples of the most common conditional statements:
1: if Statement - The if statement is used to execute a block of code if a specified condition is true.
    Syntax:
    if (condition){
        Code to be executed if condition is true
    }

2: if..else statement - The else statement is used with if to specify a block of code to be executed if 
the condition is false
     Syntax:
    if (condition){
        Code to be executed if condition is true
    }else{
        Code to be executed if condition is false
    }

3: if..elseif statement -The else if statement allows you to specify a new condition if the first condition
 is false
     Syntax:
    if (condition1){
        Code to be executed if condition1 is true
    } else if (condition2){
        Code to be executed if condition2 is true
    }else{
        Code to be executed if no condition is true
    }

4: Switch statment - The switch statement is used to select one of many code blocks to be executed.
    Syntax:
    switch(expression){
        case value1:
            Code to be executed if expression is value1
            break;
        case value2:
            Code to be executed if expression is value2
            break;
        //....
        default:
            Code to be executed if expression does not match any case    
    }
*/

//1. if Statement

let age = 18;
if(age>=18){
    console.log("You are an adult");
}

//2. if...else Statement

if(age>=18){
    console.log("You are an adult");
}else{
    console.log("You are a kid");
}

//3. if...elseif statement

let time = 14;
if(time<=12){
    console.log("Good Morning");
}else if (time < 18){
    console.log("Good Afternoon");
}else{
    console.log("Good Evening");
}

//4. Switch Statement

let day = "Monday";
switch(day){
    case "Monday":
        console.log("It is the first day of the week");
        break;
    case "Tuesday":
        console.log("It is the Second day of the week");
        break;
    case "Wednesday":
        console.log("It is the Third day of the week");
            break;
    case "Thursday":
        console.log("It is the Fourth day of the week");
        break;
    case "Friday":
        console.log("It is the Fifth day of the week");
        break;
    case "Saturday":
        console.log("It is the Sixth day of the week");
        break;
    case "Sunday":
        console.log("It is the Last day of the week");
        break;
    default:
        console.log("Just a Day");
}
