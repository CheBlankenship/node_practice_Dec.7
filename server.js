const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const marked = require('marked');
const token = 'Keep me a secret';
const uuid = require('uuid');
const app = express();






// app.use(express.static('public'));
function auth(req, res, next) {
  app.use(bodyParser.json());
  app.set('view engin', 'hbs');

    if(req.query.token === token){
      next();
    }
    else{
      res.status(401);
      res.json({ error: 'you arn t logged in.'});
    }
  }
}

app.post('/api/login', function(req, res){
  var username = req.body.username;
  var password = req.body.password;

  if(usename === 'larry' && password === 'open'){


    res.json({
      username: username,
      token: token
    });
  }
  else{
    res.status(401);
    res.json({
      error: 'Login incorrect'
    });
  }
});

app.listen(3000, function(){
  console.log("Example app listening on part 3000");
});
