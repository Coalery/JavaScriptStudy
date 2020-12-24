let EventEmitter = require("events").EventEmitter;
let evt = new EventEmitter();

evt.on("helloNode", (val) => {
    console.log('Hello! ' + val);
});

setTimeout(() => {
    evt.emit("helloNode", "Node.js");
}, 3000);