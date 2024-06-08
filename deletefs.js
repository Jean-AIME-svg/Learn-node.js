const { error } = require('console')
var fs = require('fs')

fs.unlink('app.txt',(error)=>{
    if(error){
        console.log('now your file failed to be  deleted  bro')
    }
    else{
        console.log('correctly now  i have deleted each and ever bro')
    }
})