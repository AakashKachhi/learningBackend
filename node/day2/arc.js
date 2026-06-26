// FileName Architecture.js

// const fs = require("fs");

// setImmediate(() => {console.log("Hello from immediate 1");}, 0);

// console.log("Hello world 1");

// setTimeout(() => {
//     console.log("Hello from timeout 1");
// }, 0);

// Execution
// 1. console
// 2. settimeout
// 3. setImmediate


process.env.UV_THREADPOOL_SIZE = 5  // tHIS help to increase the number thread pool max thread is 128


let start = Date.now()

const crypto = require("crypto")

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms Done`);
})

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms Done`);
})

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms Done`);
})

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms Done`);
})

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms Done`);
})

