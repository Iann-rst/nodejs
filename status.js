const os = require('os')
const log = require('./logger')

setInterval(() => {
    const {freemem, totalmem} = os //extrair de dentro do os o freemem e totalmem

    const total = parseInt(totalmem()/1028/1024)
    const mem = parseInt(freemem()/1028/1024)
    const percents = parseInt((mem/total)*100)
    
    const status = {
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents}%`
    }

    console.clear()
    console.log("==== PC STATS ====")
    console.table(status)

    log(`${JSON.stringify(status)}\n`)

}, 1000)
