const http = require('http');
// Create server object
http.createServer((req, res) =>{
    // write response
    res.writeHead(2000)
    res.write('Hello world! My name is Grace and this is my first server');
    res.end();
})
.listen(5000, () => console.log('Server running ...'));
