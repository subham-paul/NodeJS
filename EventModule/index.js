const EventEmitter = require("events");
const event = new EventEmitter();

event.on("eventMod", () => {
    console.log("Hello World");
});
event.on("eventMod", () => {
    console.log("Hello World - 1");
});
event.on("eventMod", () => {
    console.log("Hello World - 2");
});


event.emit("eventMod")