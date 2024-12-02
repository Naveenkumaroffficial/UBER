const http = require('http')
const app = require('./app')
const port = process.env.PORT || 3000
const getConnectDb = require('./db/db')



const server = http.createServer(app)
getConnectDb()

server.listen(port, ()=>{
    console.log(`server is running on ${port}`);
    
})