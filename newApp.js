const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// 1. Basic event listening and emitting
eventEmitter.on("message", () => {
    console.log("message event happened");
});

// Fixed typo: evenetEmitter -> eventEmitter, removed invalid .eventEmitter() line
eventEmitter.emit("message");
eventEmitter.emit("message");
eventEmitter.emit("message");

// 2. Event with parameters
eventEmitter.on("login", (username) => {
    console.log(username, "logged in");
});

// Fixed string quotes and variable name
eventEmitter.emit("login", "ajay");

// 3. Event with multiple parameters
eventEmitter.on("sign", (name, age) => {
    console.log("name:", name);
    console.log("age:", age);
});

eventEmitter.emit("sign", "akhil", 25);

// 4. Event with callback function as payload (though usually emit takes data, not full listeners)
eventEmitter.on("signout", () => {
    console.log("User signed out");
});

eventEmitter.emit("signout");
eventEmitter.emit("signout");
eventEmitter.emit("signout");

// 5. Named listener function, removal, and correct event name
function messageHandler() {
    console.log("Message recieved");
}

// Fixed string quotes and passed function reference correctly
eventEmitter.on("message1", messageHandler);
eventEmitter.emit("message1");

// Fixed method name: removedListener -> removeListener
eventEmitter.removeListener("message1", messageHandler);
eventEmitter.emit("message1"); // Won't output anything because it was removed

// 6. Multiple listeners and listener count
eventEmitter.on("message2", () => {
    console.log("Listner 1");
});

eventEmitter.on("message2", () => {
    console.log("Listner 2");
});

eventEmitter.on("message2", () => {
    console.log("Listner 3");
});

eventEmitter.on("message2", () => {
    console.log("Listner 4");
});

// Fixed method name: listnerCount -> listenerCount
const count = eventEmitter.listenerCount("message2");
console.log(count); // Output: 4

eventEmitter.emit("message2");

// Fixed method name: removeALLlistner -> removeAllListeners
eventEmitter.removeAllListeners("message2");
eventEmitter.emit("message2"); // Won't output anything because listeners were cleared




