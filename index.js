// this used to import the josn server using require becuse of node using traditional js insted of modern js like react ,react use import statment to impoert
const jsonSever=require('json-server')
// create  a express  like server instance
const rbuilder=jsonSever.create()
// tell json  server to use dataBase.json as its data source
const route=jsonSever.router('dataBase.json')
// add usefull midilware  -cors,logging
const midilware=jsonSever.defaults()
rbuilder.use(route)
rbuilder.use(midilware)
// this part used to add port id dynamically
const PORT=process.env.PORT||3000
// lisetn method used to run
rbuilder.listen(PORT,()=>{
    console.log(`server runing at port${PORT} and waitin for requst`);
    
})