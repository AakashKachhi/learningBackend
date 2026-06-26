const os = require("os");


// 1 get os platform and user info
// console.log("OS PLATFORM" , os.platform());
// console.log("USER INFO" , os.userInfo());

// 2. Get the os CPU architecture
console.log("CPU Architecture", os.arch());

// 3. Get the as CPU core info
// console.log("CPU CORE INFO", os.cpus().length);

// 4. get the free memory
console.log("FREE MEMORY", os.freemem());

// 5. Get the total memory of the system
console.log('Total Memory:', os.totalmem() , "bytes");

// 6. Get the home directory of the user
console.log('Home Directory:', os.homedir());

// 7. Get the host name of the system
console.log('Host Name:', os.hostname());

// 8. Get the network interfaces of the system
console.log('Network Interfaces:', os.networkInterfaces());

// 9. Get the os release info
console.log('OS Release:', os.release());

// 10. Get the os temp directory
console.log('OS Temp Directory:', os.tmpdir());

// 11. Get the os uptime
console.log('OS Uptime:', os.uptime(), "seconds");

// 12. Get the os version
console.log('OS Version:', os.version());

// 13. Get the os load average  
console.log('OS Load Average:', os.loadavg());

// 14. Get the os endianness
console.log('OS Endianness:', os.endianness());

// 15. Get the os constants
console.log('OS Constants:', os.constants);

// 16. os type
console.log('OS Type:', os.type());