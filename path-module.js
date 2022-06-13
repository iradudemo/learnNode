// const os = require("os");

// // info about the current user

// const user = os.userInfo();

// console.log(user);

// // method returns the system uptime in second

// console.log(`the system uptime is ${os.uptime()} seconds`);

// const currentOs = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// };
// console.log(currentOs);

const path = require("path");

console.log(`my path separate is: ${path.sep}`);

// display path
const filePath = path.join("/content", "subDir", "testFile.txt");

console.log(`the path is ${filePath}`);

// displaye the name of the specified file
const base = path.basename(filePath);
console.log(base);

// display absolute  location

const absolute = path.resolve(__dirname, "content", "subDir", "testFile.txt");
console.log(`this is absolute location:  ${absolute}`);
