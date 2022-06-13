const names = require("./variable");
const greetings = require("./utils");
const data = require("./alt");

console.log(data);

greetings(names.first);
greetings(names.second);
greetings("Happy");
