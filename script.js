console.log("Script running...")
// Task 1: Define a function called `calculateArea` that takes length and width as parameters and returns the area (length * width)
function calculateArea(length,width){
  return length * width;
}



// Call the `calculateArea` function with any two values. Console log the result to check it.

calculateArea(2,4)
console.log(calculateArea(2,4))

// Task 2: Define a function called `checkPassing` that takes in `student` (object) as a parameter and returns whether the `grade` attribute is greater than or equal to 63.

function checkPassing(student){
  if(student.grade >= 63)
console.log("There grade is higher than 63")  
  return true
}



// Define a `student` object that has name (string), class (string), and grade (number) attributes.

let student = {
student: "Francisco",
grade:83
  
}

let result = checkPassing(student,83)
console.log(result)

// Call the `checkPassing` function with the `student` object. Console log the result to check it.



// Task 3: Define a function called `printIndex` that takes in `array` and `index` as parameters andconsole logs the element at that index of the array.
// Pink & Blue: Define `printIndex` as an ARROW function
printIndex = () => {
  return favoriteFoods[0]
}

let favoriteFoods = ['chicken', 'Tamales', 'Tacos']
// Define an array called `favoriteFoods` and put at least 3 elements in


// Call the `printIndex` function with `favoriteFoods` and any index
let result2 = printIndex(favoriteFoods[0])
console.log(result2)


// Extra Credit: Define an arrow function called `calculateTotal` that takes in `array` (array of numbers) as a parameter and returns the total of all the numberes



// Define an array called `numbers` and put at least 3 numbers in


// Call the `calculateTotal` function with `numbers` and any index



