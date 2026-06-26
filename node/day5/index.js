const crypto = require("crypto");

// 1. randomBytes
const randomValues = crypto.randomBytes(8)
console.log(randomValues.toString("hex"));

// 2. Create Hash Values
const hashValue = crypto.createHash("sha256").update("Aakash").digest("hex");

const inputValue = "Aakash";
const matchValue = crypto.createHash("sha256").update(inputValue).digest("hex");

if(hashValue === matchValue) {
    console.log("You can login");
} else{
    console.log("Something went wrong");
}

// encryption and decryption 