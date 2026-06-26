const http = require("http");
const fs = require("fs")
const {Transform, pipeline} = require("stream");


const PORT = 3000;

const server = http.createServer((req, res) => {


    // Downloading file in bad way❌
    // const file = fs.readFileSync("sample.txt")

    // res.end(file);

    // Downloading file in a good way
    // const readableStream = fs.createReadStream("sample.txt");
    // readableStream.pipe(res)

    //  Copying file

    // bad way to copy file
    // const file = fs.readFileSync("sample.txt");
    // fs.writeFileSync("output.txt", file);
    // res.end()


    // good way
    // const readStream = fs.createReadStream("sample.txt");
    // const writeStream = fs.createWriteStream("output.txt")

    // readStream.on("data", (chunk) => {
    //     console.log("CHUNK: ", chunk);
    //     writeStream.write(chunk)
    // })

    //      Stream Processing
   
    // Uppercase
    // ipsum = Aakash
    const readStream = fs.createReadStream("sample.txt")
    const writeStream = fs.createWriteStream("output.txt");

    const transformStream = new Transform({
        transform(chunk, decoding, callback) {
            const modifiedWord = chunk.toString().toUpperCase().replaceAll(/ipsum/gi, "Aakash");
            callback(null,  modifiedWord)
        }
    })

    // Bad Approach
    // readStream.on("data", (chunk) => {
    //     const modifiedWord = chunk.toString().toUpperCase().replaceAll(/ipsum/gi, "Aakash");
    //     writeStream.write(modifiedWord);
    // });

    readStream.pipe(transformStream).pipe(writeStream); 
    // pipeline(readStream, transformStream, pipeline, (err)=>{console.log(err);} )

    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is connect at ${PORT}`);
});


/* 
        Important for notes

    stream -----> Writeable and Readable

    readable <-----pipe-----> writeable

    req = readableStream 
    res = writeableStream



    transformStream = readable and writable
*/