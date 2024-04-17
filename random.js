//defining a function
function double(x) {
    return x * 2
}

double(4)
//i want double 4 to get 8. 

//calling a function

const double2 = (x) => {
    return x * 2
}
// for print off 1 - 100 in console.log
//for loop

for (let i = 1; i <= 100; i++) {
    console.log(i)
};


let i = 1;
while (i <= 100) {
    console.log(i)
    i++;
}

//array of everybody's name. create a loop to console everybody's name. 

for (let index = 0; index <= names.length; index++) {
    console.log(names[index]);
}

//function for a starting number and ending number 32, 563

function rangeFinder(low, high) {
    for (let i = low; i <= high; i++) {
        console.log(i)
    }
}

rangeFinder(32, 563);
rangeFinder (-1000, 7); //these are arguements 

//function that will tell me if it was odd or even. 
// conditional function 
// modulous operator %

function isEven(number) {
    if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}
 
function isEven(number) {
   return (number % 2 === 0) ? "even" : "odd" //ternary. 
}

// take a string of letters that will return a 4 points, b = 3, c= 2, d = 1
function gpa(grade) {
switch (grade) {
    case "A":
        4;
    break; 
    case "B":
        3; 
    break;
    case "C":
        2;
    break; 
    case "D": 
        1;
    break; 
    default: 0; 
}
} // use a switch case if there are more than 4 options. Case is always looking for an equal. 