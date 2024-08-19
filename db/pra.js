const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('../databas',(err)=>{
    if(err){
        console.log("The Error while connecting with database")
    }
    else{
        console.log("The Database connected ")
    }
})