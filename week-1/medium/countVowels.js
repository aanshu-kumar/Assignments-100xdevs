
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