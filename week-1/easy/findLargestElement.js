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