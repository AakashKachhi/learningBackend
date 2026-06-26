# Node.js Backend Master Notes

## Part 1: Node.js Basics, Modules, FS & Architecture (00:00:00 - 01:20:00)

### 📌 TL;DR (Quick Summary)
Node.js ek JavaScript Runtime Environment hai jo Chrome ke V8 engine par chalta hai. Yeh server-side par code execute karta hai, blocking aur non-blocking I/O handle karta hai, aur modules ki madad se code organize karta hai.

### 🧠 1. The "Why" & "How" (Concept & Logic)
- JS ko browser se bahar nikal kar machine (OS) se direct interact karne ki power di.
- Yeh koi language nahi, balki ek environment hai jo JS ko execute karne ke liye tools deta hai.

### 🔍 2. Deep Dive Conceptual Explanation (Full Detail)
Node.js ka asli structure **Event-Driven Architecture** par mabni hai. Jab koi request aati hai, Node.js use process karne ke liye thread block nahi karta, balki use OS ke **libuv** library ko bhej deta hai. Libuv phir decide karti hai ki task ko **Thread Pool** mein bhejna hai ya simple Event Loop se handle karna hai. Iski wajah se Node.js hazaron connections ek sath handle kar sakta hai bina server crash kiye.



### 💻 3. Implementation (Code)
```javascript
// Module Export/Import
const math = { add: (a, b) => a + b };
module.exports = math; 

// File Handling (Async)
const fs = require('fs');
fs.readFile('./test.txt', 'utf-8', (err, data) => {
    if (err) console.log(err);
    else console.log(data);
});