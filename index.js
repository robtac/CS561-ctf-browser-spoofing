const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const userAgent = req.headers['user-agent'];
    if (userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('Trident') > -1) {
        fs.readFile('flag.txt', (err, data) => {
            if (err) throw err;
            res.end(data)
        })
    } else {
        res.end(`Error: incompatible browser "${userAgent}" detected. \n
            Try something older/slower!\n
            Hint: you do NOT need to download it for this challenge :)`);
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

