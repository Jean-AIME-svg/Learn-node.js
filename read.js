const { error } = require('console')
var fs=require('fs')
fs.readFile('app.txt', 'utf-8',(error,data)=>{


if (error) {
    console.log('error occcured while reading file bro')
}
else{
    console.log('now u ready to read file bro')
}
})