const http = require('http');

const hostname = '0.0.0.0'; 
const port = 3000; 
const port2 = 5000; 

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from  GitLab  CI/CD   and ArgoCD and Gitlab Registry!\n');
});

server.listen(port, hostname, () => { 
  console.log(`Server running at http://${hostname}:${port}/`);
});

server.listen2(port, hostname, () => { 
  console.log(`Server running at http://${hostname}:${port2}/`);
});

