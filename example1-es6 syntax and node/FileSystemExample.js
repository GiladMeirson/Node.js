const fs = require('fs');



fs.writeFile('./test.txt','hello this is my text',(err)=>{
    err?console.log('errpr: ',err):console.log('sucsses');
    
})

fs.readFile('./test.txt','utf-8',(err,data)=>{
    err?console.log('error: ',err):console.log('in file: ',data);
})



const createHtmlPage=()=>{
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My HTML File</title>
</head>
<body>
    <h1>Hello, world!</h1>
    <p>This is a dynamically generated HTML file using Node.js.</p>
</body>
</html>
`;
const filePath = './example.html';

fs.writeFile(filePath, htmlContent, (err) => {
    if (err) {
        console.error('An error occurred:', err);
        return;
    }
    console.log('HTML file created successfully.');
});
}

createHtmlPage();