const path = require("path");

console.log("FILENAME📂", __filename);
console.log("DIRNAME📂", __dirname);

// School Management System

// folder/students/data.txt

// 1. Join()
const filePath = path.join("folder", "students", "data.txt"); 
// Output: folder/students/data.txt   (join used bcz in mac for structure folder it use "\" this btw the file's names)

console.log(filePath);


const resolvedPath = path.resolve(filePath)
const parsePath = path.parse(filePath)
const extName = path.extname(filePath)
const baseName = path.basename(filePath)
const dirName = path.dirname(filePath)


console.log({
    resolvedPath,
    parsePath,
    extName,
    baseName,
    dirName
});