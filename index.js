//inport json-server
const jsonServer = require('json-server')

//create server instance
const rBuilderServer = jsonServer.create()

//tell json-server to use db.json as data source
const router = jsonServer.router('dataBase.json')

//add usefull middleware
const middleware = jsonServer.defaults()

//tell the server to use router and middleware
rBuilderServer.use(middleware)
rBuilderServer.use(router)


//set the port, if locally running use port 3000
const PORT = process.env.PORT || 3000

//define the port in which server has to run
rBuilderServer.listen(PORT, ()=>{
    console.log(`rbServer running at port ${PORT} and waiting for client request...`);
    
})

//in package.json, in scripts change test to, "start": "node index.js"