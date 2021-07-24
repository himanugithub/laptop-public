const mongose=require ("mongoose")

mongose.connect("mongodb+srv://m001-student:SAK@1718@sandbox.nydk4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser=true,
    useCreateIndex=true,
    useUnifiedTopology=true
    
}).then(()=>{
    console.log("ckjashdfashfd");
}).catch(()=>{
    console.log("No Conenction");
})
