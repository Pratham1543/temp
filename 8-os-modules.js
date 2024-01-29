const { log } = require("console");
const os = require("os");

// info aboutv currwnt user

const user = os.userInfo();
console.log(user);

//methods returens the system uptimes in seconds
console.log(`The Sysytem uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
