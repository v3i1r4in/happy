require('http').createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>&#128512; happy hackweek!</h1>');
})
.listen(8080)
