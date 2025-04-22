const http = require('http'); 
const url = require('url'); 
const server = http.createServer((req, res) => { 
const queryObject = url.parse(req.url, true).query; 
const name = queryObject.name || 'hanny'; 
const age = queryObject.age || '13'; 
res.writeHead(200, { 'Content-Type': 'text/html' }); 
res.end(`<h2>Hello, ${name}!</h2><p>Age: ${age}</p>`); 
}); 
const PORT = 3001; 
server.listen(PORT, () => { 
console.log(`Server is running at http://localhost:${PORT}`); 
}); 