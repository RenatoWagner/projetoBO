var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/BO');
var BO = mongoose.model('BO', mongoose.Schema({
  ocorrencia:String,
  data:String,
  local:String,
  envolvidos:String,
  bensEnvolvidos:String,
  dinamicaDoFato :String
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/cliente'));

app.get('/api/BOs', function(req, res){
  BO.find(function(err, BO){
    if(err)
      res.send(err);
    res.json(BO);
  });
});

app.get('/api/BO/:id', function(req, res){
  BO.findOne({_id:req.params.id}, function(err, BO){
    if(err)
      res.send(err);
    res.json(BO);
  });
});

app.post('/api/BOs', function(req, res){
  BO.create(req.body, function(err, BO){
    if(err)
      res.send(err);
    res.json(BO);
  });
});

app.delete('/api/BOs/:id', function(req, res){
  BO.findOneAndRemove({_id:req.params.id}, function(err, BO){
    if(err)
      res.send(err);
    res.json(BO);
  });
});

app.put('/api/BOs/:id', function(req, res){
  var query = {
    ocorrencia:req.body.ocorrencia,
    data:req.body.data,
    local:req.body.local,
    envolvidos:req.body.envolvidos,
    bensEnvolvidos:req.body.bensEnvolvidos,
    dinamicaDoFato:req.body.dinamicaDoFato
  };
  BO.findOneAndUpdate({_id:req.params.id}, query, function(err, BO){
    if(err)
      res.send(err);
    res.json(BO);
  });
});




app.listen(3000, function(){
  console.log('O servidor está rodando na porta 3000');
});
