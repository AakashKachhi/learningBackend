const EventEmitter = require("events");

const emitter = new EventEmitter();

// KeyMethods
// on (eventName, Listener) --- create

emitter.on("GREET", (args) => {
    console.log(`Hello World ${args.username} and the id is ${args.id}`);
})

// emit (eventName, [args]) --- execute

emitter.emit("GREET", {
    username: "Aakash",
    id: "1lkajdgalksdj343alksd"
})