const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const marked = require('marked');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
// app.set('view engin', 'hbs');

function auth(req, res, next){
  if(req.query.token === token){
    next();
  }
  else{
    res.status(401);
    res.json({ error: 'You r not login'});
  }
}

app.use(function myMiddleware(request, response, next){
  console.log(request.method, request.path);
  next();
});

app.get('/', function I_am_middleware(req, res){
  res.send('Hello world!');
});

// app.get('/', function I_am_middleware(req, res){
//   res.send('Hello world!');
// });

app.listen(3000, function(){
  console.log("Example app listening on part 3000");
});
