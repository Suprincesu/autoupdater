const express=require('express');
const updater=require('./autoupdate');

var app=express();

console.log('teri ma ki aakh');
app.listen(8008,()=>{
	console.log('listening to port 8008');
});
