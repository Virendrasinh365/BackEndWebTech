const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url == '/Home') {
        res.statusCode = 200;
        res.write('<h1> hello from home page</h1>');

    }
    else if (req.url == '/contact') {
        res.statusCode = 200;
        res.write('<h1> hello from Contact page</h1>');

    } else if (req.url == '/student') {
        res.statusCode = 200;
        res.write('<h1> hello from Student page</h1>');

    } else if (req.url == '/main') {

        res.statusCode = 200;
        res.write('<h1> hello from Main page</h1>');

    } else if (req.url == '/about') {
        res.statusCode = 200;
        res.write('<h1> hello from About page</h1>');

    } else {
        res.statusCode = 404;
        res.write('Page not found');
    }
    res.end();

})
server.listen(3000, () => {
    console.log('server started @3000');
});