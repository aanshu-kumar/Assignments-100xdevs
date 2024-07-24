// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```


fs=require("fs");

fs.readFile("a.txt",'utf8',(err,data)=>{
    if(err)
    {
        console.log("Error:"+err)
    }

    const cleanedData = data.replace(/\s+/g, ' ').trim();
    console.log(cleanedData);

    fs.writeFile("a.txt", cleanedData, 'utf8', (err) => {
        if (err) {
          console.error('Error: ', err);
          return;
        }
        console.log('File write success');
      });

})