'use strict'

var express = require('express');

var app = express();

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/app', express.static(__dirname + '/app'));
app.use('/assets', express.static(__dirname + '/assets'));


app.listen('3000',function(){
    console.log('Server running at http://localhost:3000 !!')
})

app.get('/',function(req,res){
    res.sendFile('index.html',{'root':__dirname + '/app'});
})