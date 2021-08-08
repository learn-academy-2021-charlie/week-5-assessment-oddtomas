// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.

describe("codeWord", () => {
var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"
    it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
      expect(codeWord(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(codeWord(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(codeWord(secretCodeWord3)).toEqual("3cc3ntr1c")

    })
  })


// b) Create the function that makes the test pass.
//create a function that takes a string
codeWord = (str) => {
    //create an empty string to save the conversion
    var newStr = ""
    //make an object representing character mappings to be used with the replace function. ('a' swaps to '4', 'e' swaps to '3' so on so forth hedging for capitol letters)
    var chars = {'a':'4','A':'4','e':'3','E':'3','i':'1','I':'1','o':'0','O':'0'};
    //use replace with a function as the argument that gets called for each match 
    newStr = str.replace(/[aeioAEIO]/g, m => chars[m]); //[aeioAEIO] are the characters being checked for "g" represents all instances of these characters. "m => chars[m]" is our function for swapping the characters, where there would normally be another argument for replace(). Replace() works with the parameters of (old thing, new thing) usually. 

//return the new coded string    
return newStr 


    }

// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

describe("aWords", () => {
    var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    // Expected output: ["Apple", "Banana", "Orange"]
    var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    // Expected output: ["Mango", "Apricot", "Peach"]
        it("takes in an array and returns all the words that contain the letter a", () => {
          expect(aWords(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"])
          expect(aWords(arrayOfWords2)).toEqual(["Mango", "Apricot", "Peach"])  
        })
      })


// b) Create the function that makes the test pass.

//create a function that takes an array   
aWords = (arr) => {
    //iterate through the array to find words that include 'a' or 'A'
    var result = arr.filter(item => item.includes('a') || item.includes('A')); //using filter go through the array with the conditions of include('a') or include('A')

   //return an array of all the words that contain the letter a 
return result
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.



describe("fullHouse", () => {
    var hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    var hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    var hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
        it("takes in an array of 5 numbers and determines whether or not the array is a “full house", () => {
          expect(fullHouse(hand1)).toEqual(true)
          expect(fullHouse(hand2)).toEqual(false) 
          expect(fullHouse(hand3)).toEqual(false)  
 
        })
      })

// b) Create the function that makes the test pass.
const fullHouse = (arr) => {
    let countObj = {}
    for(let x of arr){
      countObj[x] = (countObj[x] || 0) + 1;
    }
    let vals = Object.values(countObj);
    if((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)){
      return true;
    }
    return false;
  }
  
  //To check two pairs
  const twoPairs = arr => {
    let countObj = {}
    for(let x of arr){
      countObj[x] = (countObj[x] || 0) + 1;
    }
    let vals = Object.values(countObj);
    //console.log(vals);
    if(vals.filter(x => x === 2).length == 2) return true;
    return false;
  }