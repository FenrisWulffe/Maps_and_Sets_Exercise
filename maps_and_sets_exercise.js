// Maps and Sets Exercise

// Quick Question #1:
// What does the following code return?
new Set([1,1,2,2,3,4])
// {1, 2, 3, 4}


// Quick Question #2:
// What does the following code return?
[...new Set("referee")].join("")
// 'ref'

// Quick Questions #3:
// What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// 0: {Array(3) => true}
// 1: {Array(3) => false}

// hasDuplicate:
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false
// Thought process for solution:
// check array length
// turn array into a set
// check set size
// if array length = set size return false else return true

const hasDuplicate = newArr => {
  if(new Set(newArr).size === newArr.length) {
  return false;
  } else {
    return true;
  }
}
// Provided solution:
const hasDuplicate = arr => new Set(arr).size !== arr.length


// vowelCount:
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string
vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

const vowelCount = newString => {
  // console.log('String Input: ', newString);
  let tempArr = Array.from(newString.toLowerCase());
  // console.log('Array from String: ', tempArr);
  let vowels = tempArr.filter((letter) => letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u');
  // console.log('Vowels contained within: ', vowels);
  let newSet = new Set(vowels);
  // console.log('Duplicate  Entries Removed: ', newSet);
  let newMap = new Map();
  newSet.forEach((char) => newMap.set(char, 0));
  // console.log(newMap);
  vowels.forEach((vowel) => {
    newMap.forEach((val, key) => {
      // console.log(vowel, key);
      if(key === vowel){
        newMap.set(key, val + 1);
      }
    });
  });
  // console.log(newMap);
  return newMap;
}
// Provided Solution:
function isVowel(char){
  return "aeiou".includes(char);
}

function vowelCount(str){
  const vowelMap = new Map();
  for(let char of str){
    let lowerCaseChar = char.toLowerCase()
    if(isVowel(lowerCaseChar)){
      if(vowelMap.has(lowerCaseChar)){
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}