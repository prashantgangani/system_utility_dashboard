const os = require('os');
const fs = require('fs');
const path = require('path');


const info = `
OS: ${os.type()}
Total Memory: ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB
Free Memory: ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB
CPU: ${os.cpus()[0].model}
`;

console.log(info);

const logPath = path.join(__dirname, 'logs', 'system-info.txt');
fs.mkdirSync(path.dirname(logPath), { recursive: true });
fs.writeFileSync(logPath, info);

console.log(`System info saved to ${logPath}`);
