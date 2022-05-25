require("dotenv").config();
const http = require('http')
const { oracle } = require("./services/oracle");
oracle();

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Welcome to Credential Oracle\n')
})

server.listen(port, hostname, () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`Server running on ${bind}`)
})