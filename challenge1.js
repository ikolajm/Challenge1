// Palindrome

// Prompt to ask the user for a word
// let word = prompt("What word are you checking");
//         // Create clone variable of word for check purposes
//         let clone = word;
//         // Split clone into multiple items in array
//         let array = clone.split("");
//         // Reverse order of the array
//         array.reverse();
//         // Join into new combined word
//         let newWord = array.join("");
//         // Check to see if clone equals the original
//         (newWord.toLowerCase() === word.toLowerCase()) ? console.log("This is a palindrome") : console.log("This is not a palindrome");

// UPDATED
// function isPalindrome(x) {
//         // Create clone variable of word for check purposes
//         let clone = x;
//         // Split clone into multiple items in array
//         let array = clone.split("");
//         // Reverse order of the array
//         array.reverse();
//         // Join into new combined word
//         let newWord = array.join("");
//         // Check to see if clone equals the original
//         (newWord.toLowerCase() === clone.toLowerCase()) ? console.log("This is a palindrome") : console.log("This is not a palindrome");
// }

// isPalindrome("racecar");


//  Write a function that checks to see if all characters in a string are unique

// let x = "String";
// let y = "racecar";

// // Function to check if word is unique
// let isUnique = word => {
//   // Let the word be unique by default  
//   let unique = true;
//   // Split given word into an array with individual values
//   let broken = word.split("");
//   // for every letter in array broken, iterate over the array  
//   for (letter in broken) {
//     // Check every letter compared to each letter in the array
//     for (compared in broken) {
//       //  If the letters don't match and the indeces match
//       if (letter !== compared && broken[letter] === broken[compared]) {
//         // Change the unique variable to false
//         unique = false;
//       }
//     }
//   }
//   // If the word is unique  
//   if(unique){
//     console.log(`${word} is unique!`); 
//   // If the word is not unique    
//   } else {
//     console.log(`${word} isn't unique!`);
//   }
// }

// isUnique(x);
// isUnique(y);

