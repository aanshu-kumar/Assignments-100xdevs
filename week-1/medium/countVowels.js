
/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here

    const str1=str.toUpperCase();
    let count=0;
    // console.log(str1);
    for(let i=0;i<str1.length;i++){
        const str2=str1[i];
        if(str2=='A' ||str2=='E'|| str2=='I' || str2=='O' || str2=='U')
            count++;
    }
    return count;
}
const result = countVowels("anshu");
console.log(result);