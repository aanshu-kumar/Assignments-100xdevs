/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

    const text1=str1.toUpperCase();
    const text2=str2.toUpperCase();
    let sum1=0;
    let sum2=0;
  if(str1.length!=str2.length){
    return false;
  }
    for(let i=0;i<str1.length;i++)
    {
      sum1=text1.charCodeAt(i)+sum1;
      sum2=text2.charCodeAt(i)+sum2;
    }
    if(sum1-sum2==0)
    {
        return true;
    }
    else
    {
        return false;
    }
    
  }
  const result = isAnagram("anshu","nshuu");
  console.log(result);