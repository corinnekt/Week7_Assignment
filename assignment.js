
// Printing questions to browser using console.log()
console.log('1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.') // copy and pasted the instruction, added quotations to wrap around text and make it a string
// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93] //declared a new array by defining the variable 'ages' (as set by 'let') with square brackets [] and filling in the required elements
console.log("ages array:", ages)


//      - Programmatically subtract the value of the first element in the array from the value in the last element of the array.
//          - Do not use numbers to reference the last element, find it programmatically.
//          - ages[7] - ages[0] is not allowed!

console.log("first - last:", ages[ages.length -1] - ages[0]) 
// to subtract the first value from the last value, I identified the last value in the array named 'ages' by naming the array and indicating the element index with ages.length -1 in suqare brackets.
// next, I identified the first element in the array by naming the array 'ages' and indicating the index of the first element in square brackets [0], and subtracted that block from the first block


//      - Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages.push(17) // added the number 17 to the array, so that 17 is now the last element
console.log("new first - last:", ages[ages.length -1] - ages[0]) // repeated the above process with the element in index 0, which is 3, is subtracted from the last element, which is now 17.


//      - Use a loop to iterate through the array and calculate the average age.

let sum = 0 // in order to find the average, we have to know the sum to divide it by the array length
for (i = 0; i < ages.length; i++) { // the loop that I know iterates is the 'for' loop, so the lopp will begin iterating at the start of the array, which is the 0 index, when the index 'i' fits inside the length of the array, and iterate incrementally from index 0 to index 1 to index 2 all the way to least element in the array legth index
    sum += ages[i] // the sum variable which started at 0 will use the considtions in the for loop that will iterate through each element in the array, so each index in the array wil be added to variable sum of 0, so 0 will be added to index 0 which is 3, then that total sum of 0 + 3 will be added to index 1 which is 9 to make 0 + 3 + 9 and so on
}
console.log("average age:", sum/ages.length) // once the total sum of the array is calculated, it can be divided by the array length, or the number of elements, to find the average


//-------------------------------------------------------------------------------------------------------------------------------
console.log("2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.") // wrapped the copy and pasted in structions in double quotes to differentiate from the sing quotes expressed in the array example to make it a string
// 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
console.log("names array:", names)


//      - Use a loop to iterate through the array and calculate the average number of letters per name.
// in this array, we have 6 elements: 0, 1, 2, 3, 4, 5. We need to add up the amount of characters in each name and divide by the amount of names. 

let char = 0 // set a variable that will count the characters in the name, starting with 0
for (i = 0; i < names.length; i++){ // use a for loop to iterate through the array and count starting from 0 through the length of the array
    char += names[i].length // further define the variable 'char' that started at 0 and have it use the for loop to add the length of each element at each index [i] in the names array
    console.log("index:", i, "name:", names[i], "char:", char) // test to show character counts for each name
}
let averageChar = char/names.length // set a new variable that will divide the character counting variable by the amount of elements in the array
console.log("average character:", averageChar) // print the result of that variable based on it's definition


//      - Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let concatNames = "" // defines this variable as a blank string
for (i = 0; i < names.length; i++) { // I want to iterate through the array to locate each element at each index [i] and start adding them together in a string with each iteration
    concatNames = concatNames.concat(names[i] + " ") // What this loop will do to this variable is the concatNames variable will concatenate each name element at each index with each iteration. At the end of each iteration, it will add a space " " to the string as it is concatenated
    console.log("concatenated names itereated:", concatNames) // test to show how each name is concatenated to the concatNames string with each iteration
} 
console.log("concatenated names:", concatNames)


//----------------------------------------------------------------
console.log('3. How do you access the last element of any array?')
// 3. How do you access the last element of any array?

console.log("names.length -1", names[names.length -1]) // because array indexes start at zero, the last element will always be 1 less than if the elements in an array started at 1 ex. the last eement in an array with 6 elements will be at index 5


//-----------------------------------------------------------------
console.log('4. How do you access the first element of any array?')
// 4. How do you access the first element of any array?

console.log("names[0]", names[0]) // the first element in an array will always start at index 0


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log('5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.')
// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
  // For example:

// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array

let nameLengths = [] // create a new variable that is a blank array inidcated by square brackets []
for (i = 0; i < names.length; i++) { // use a for loop for a repeative iterative task
    nameLengths.push(names[i].length) // the new array is pushing into itself the length of each name in the names array as it iterates through each index. --.push adds elements to arrays
    console.log("name", names[i], "length", nameLengths) // test to demonstrate how each iteration pushes the next name length into the new array
}
console.log("name lengths:", nameLengths) // prints the final result of each iteration being pushed into the new array


//--------------------------------------------------------------------------------------------------------------------------
console.log('6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.')
// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

sum = 0 // start with a sum of zero (reassigned from previous use of the variable 'sum')
for (i = 0; i < nameLengths.length; i++) { //iterate through the length of the nameLength array
    sum += nameLengths[i] // add up each element in each index of the nameLengths array with each iteration
    console.log("name length:", nameLengths[i], "lengths sum:", sum) // test to show each element being added to the last with each iteration
}
console.log("sum of name lengths:", sum) // sum total of all the lements in the array


//---------------------------------------------------------------------------------------------------------------------------------------------------
console.log('7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.')
// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

function concatWord (word, n) { // create the function by typing 'function' and giving it a descriptive name. The parentheses hold the paramenters, and a function needs a body denoted by curly braces {}
    let concat = word.repeat(n) //create a variable that defines what happens with the parameters
    console.log(concat) // the result of the function is printed when the function is called
}
concatWord ("Hello", 3) //the function is called to be ran, and the result is printed to the console


//------------------------------------------------------------------------------------------------------------
console.log('8. Write a function that takes two parameters, firstName and lastName, and returns a full name.')
// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

function fullName (firstName, lastName) { //make the function and put firstName and lastName as the two parameters separated by a comma
    let fullName = firstName + " " + lastName // create a variable to define the parameters in the function
    console.log(fullName) //print the result
}
fullName ("Corinne", "Truesdell") //call the function


//------------------------------------------------------------------------------------------------------------------------------------------------
console.log('9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.')
// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let numbers1 = [87, 5, 41, 0, 9, 34, 8] //arrays of random numbers
let numbers2 = [70, 3, 45, 2, 1, -35] // test of when array sum is greater than 100 and less than 100

function sumNumbersArray (array) { // the parameter passed into the function will be an array
    let sumTotal = 0 // begin with a sum of zero to begin counting up the elements in the array
    for (i = 0; i < array.length; i++) {
        sumTotal += array[i] // for this array, add up each element with each iteration within the length of the array
       // console.log("index", i, "total", sumTotal) // test print
    }
    if (sumTotal > 100) { // if the sum total of the array is greater than 100, return true
        return true
    } else { // otherwise, return false
        return false
    }
}

sumNumbersArray (numbers1) //function performs when the first array is passed in
console.log(sumNumbersArray (numbers1))

sumNumbersArray (numbers2) // function performs when the second array is passed in
console.log(sumNumbersArray (numbers2))


//--------------------------------------------------------------------------------------------------------------------------
console.log('10. Write a function that takes an array of numbers and returns the average of all the elements in the array.')
// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

let numbers = [1, -98, 74, 51, 39, 86, 0] // array of random numbers

function average (array) { //pass the array into the function
    sum = 0 // to begin adding the numbers in the array, start with zero with variable sum
    for (i = 0; i < array.length; i++) {
        sum += array[i] // add up each element on itself with each iteration of the function
    }
    return sum / array.length //return the average by dividng variable sum by the length of the array
}
average (numbers) // call the function iwth the specific array
console.log(average (numbers)) //print result


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log('11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.')
// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

let numarr1 = [6, 29, 38, 10, 4, 75]
let numarr2 = [19, 2, 8, 37, 4, 65]

function greaterAvg (array1, array2) {
    let sum1 = 0 // count up first array
    let sum2 = 0 //count up second array
   for (const number of array1) { // use for of loop to count the numbers in the first array
    sum1 += number // add up all the numbers in the first array
   }
   for (const number of array2){ // use for of loop to count the numbers in the second array
    sum2 += number // add up all the numbers in the second array
   }
    let avg1 = sum1 / array1.length // create new variables to get the average of each array by dividing the variable sum by the array lengths
    let avg2 = sum2 / array2.length
    console.log("average1:", avg1, "average2:", avg2 )
    if (avg1 < avg2) { // use the if else loop to check if the condition of the average of the first array being greater than the second array is true
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
}
greaterAvg(numarr1, numarr2) // pass in arrays to check conditions
console.log(greaterAvg(numarr1, numarr2)) // print result


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log('12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.')
// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink (isHotOutside, moneyInPocket) { // the function takes the parameters of isHotOutside and moneyInPocket to check if the conditions are true to return the value of buyDrink
    let buyDrink = isHotOutside === true && moneyInPocket > 10.50 // define the variable buy drink when the parameters are met
    console.log("Buy drink?:", buyDrink) //print when function is called and parameters are met
    return buyDrink
}
willBuyDrink(true, 11) // call the funtion to return the value when the conditions/parameters are met

//---------------------------------------------------------------------
console.log('13. Create a function of your own that solves a problem.')
// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

// calculating the tip percent of a meal

function tipAmount (bill, tipPercent) {
    return bill * tipPercent
}
tipAmount(24, .18)
console.log("Tip Amount:", tipAmount(24, .18))