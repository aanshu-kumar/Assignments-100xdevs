/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function findLargestElement(numbers) {
    let biggestNumber=numbers[0];
    for(let i=0;i<numbers.length;i++)
    {
        if(biggestNumber<numbers[i])
        {
            biggestNumber=numbers[i];
        }
    }
    return biggestNumber;
}

let nums=[3, 7, 2, 9, 10]
console.log(findLargestElement(nums));