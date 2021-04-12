const http = require('http')
const fs = require('fs')
const path = require('path')

/*
npm init -y
npm i nodemon -D
npm start
*/
http.createServer((req, res) => {

    const file = req.url=== '/'?  'index.html' : req.url
    const filePath = path.join(__dirname, 'public', file)

    fs.readFile(
        filePath, (err, content) => {
            if(err) throw err

            res.end(content)
        }   
    )

}).listen(5000, ()=> console.log('Server is running'))