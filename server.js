const express=require('express');
const updater=require('./autoupdate');

var app=express();

console.log('teri ma ki aakh');
console.log('teri bap ki laat');

app.listen(8008,()=>{
	console.log('listening to port 8008');
});
