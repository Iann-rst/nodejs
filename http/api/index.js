const http = require('http')
const URL = require('url')
const fs = require('fs')
const path = require('path')

const data = require('./urls.json')

function writeFile(cb){
    fs.writeFile(path.join(__dirname, "urls.json"), JSON.stringify(data, null, 2), err =>{
        if(err) throw err

        cb(JSON.stringify({message: "ok"}))
    }
    )
}

http.createServer((req, res) => {
    //console.log(URL.parse(req.url, true).query)
    const {name, url, del} = URL.parse(req.url, true).query

    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*'
    
    })
    //todos recursos
    if(!name || !url)
        //mostrar todos
        return res.end(JSON.stringify(data))

    //deletar uma url
    if(del){
        data.urls = data.urls.filter(item => String(item.url) !== String(url))
        return writeFile((message) => res.end(message))
    }

        
    data.urls.push({name, url})
    return writeFile((message) => res.end(message))

}).listen(3000, ()=> console.log('Api is running'))