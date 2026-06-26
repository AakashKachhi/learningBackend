// !OBJECTIVE
// * CREATE A PROGRAM USING NODE-JS EVENTEMITTER THAT:

// ? LISTENS FOR MULTIPLE TYPES OF USER EVENTS (E.G LOGIN , LOGOUT , PURCHASE , AND PROFILE UPDATE)✅
// ? tRACKS HOW MANY TIMES EACH EVENT IS EMITTED.
// ? LOGS A SUMMARY OF ALL EVENTS OCCURRENCES WHEN A SPECIAL SUMMARRY EVENT IS TRIGGERED


// !REQUIREMENT

// ? create at least four custom events
// ? emit these events multiple times with different argumensts ( e.g username , item purchased)
// ? tracks and store the count of each event type.
// ? define a summary events that logs a detailed report of how many times each event was triggered


const EventEmitter = require("events");
const fs = require("fs");

const userEmitter = new EventEmitter()

const eventCounts = {
    LOGIN: 0,
    LOGOUT: 0,
    PURCHASE: 0,
    PROFILE_UPDATE: 0
}


const logFile = "eventlog.json"

if(fs.existsSync(logFile)){
    const data = fs.readFileSync(logFile, "utf-8")
    Object.assign(eventCounts, JSON.parse(data))
}

function saveCounts() {
    fs.writeFileSync(logFile, JSON.stringify(eventCounts, null, 2))
}


// Events Creating
userEmitter.on("LOGIN", (username) => {
    eventCounts.LOGIN++;
    console.log(`${username} Logged In Successfully✅`);
    saveCounts();
})

userEmitter.on("LOGOUT", (username) => {
    eventCounts.LOGOUT++;
    console.log(`${username} Logout Successfully❌`);
    saveCounts();
})

userEmitter.on("PURCHASE", (username, item) => {
    eventCounts.PURCHASE++;
    console.log(`${username} purchased ${item}`);
    saveCounts();
})

userEmitter.on("PROFILE_UPDATE", (username, field) => {
    eventCounts.PROFILE_UPDATE++;
    console.log(`${username} updated their profile field: ${field}`);
    saveCounts();
})


userEmitter.on("SUMMARY", () => {
    console.log("\n Event Summary");
    console.log(`Logins: ${eventCounts.LOGIN}`);
    console.log(`Logout: ${eventCounts.LOGOUT}`);
    console.log(`Purchase: ${eventCounts.PURCHASE}`);
    console.log(`Profile Update: ${eventCounts.PROFILE_UPDATE}`);
})

// Emit Events with different arguments

userEmitter.emit("LOGIN", "Aakash")
userEmitter.emit("LOGOUT", "Aakash")
userEmitter.emit("PURCHASE", "Aakash", "Iphone")
userEmitter.emit("PROFILE_UPDATE", "Aakash", "Email Address")

userEmitter.emit("SUMMARY")