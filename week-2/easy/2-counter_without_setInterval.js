// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.





// let counter=0;
// for(let i=0;i>=0;i++)
// {
//     setTimeout(()=>{
//         console.log(counter);
//     },1000);
//     counter++;
// }

// setTimeout is a callback function therefore this approach won't work because for loop will
// assign many setTimeout simultaniouly and then they all will print at the same time.

// another approach

function counter(count)
{
    console.log(count);
    if(count<100)
    setTimeout(()=>{
        counter(count+1);
        // console.log(count)
    },1000)
}
counter(1);

