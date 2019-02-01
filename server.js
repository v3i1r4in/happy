require('http').createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>&#128512; hello there!</h1>');
})
.listen(8080)
