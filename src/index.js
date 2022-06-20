const express = require('express')
const mongoose = require('mongoose')
const {Router} = require('express')

const router = Router()

module.exports = router

const app = express()

require('./database');

app.use(require('./routes/index.routes.js')); 

const puerto = 3000

app.listen(puerto)
console.log('Running on port 3000' )

const {Sinadef} = require('./modeloSinadef')

app.get('/consultaAll', function(req, res)
{
    //const allDocuments = async () =>
    //{
        const sinadefAll = Sinadef.find()
        const result = JSON.stringify(sinadefAll, getCircularReplacer());
        res.send('*** DATOS DE TODOS LOS DOCUMENTOS ***' + result)
    //}
});

router.get('/findAll', function(req, res) {
  Sinadef.find(function(err, data) {
      if(err){
          console.log(err);
      }
      else{
          res.send(data);
      }
  });  
});

router.get('/findOne', function(req, res) {
  Sinadef.findOne({Id: 3}, 
  function(err, data) {
      if(err){
          console.log(err);
      }
      else{
          res.send(data);
      }
  });  
});

app.get('/consultaDivorciados', function(req, res)
{
    const divorciados = Sinadef.find({ESTADO_CIVIL: 'DIVORCIADO'})
    const result = JSON.stringify(divorciados, getCircularReplac7er());
    res.send('*** DATOS DE DIVORCIADOS ***' + result)
});

const allDocuments = async () =>
{
    const sinadefAll = await Sinadef.find()
    console.log('*** Datos de todos los documentos ***', sinadefAll);
}

const filtroporId = async () =>
{
    const sinadef = await Sinadef.findById('62afe2cd40be698228f08595')
    console.log('=== Datos del registro === ', sinadef);
}

const filtroporGrupo = async () =>
{
    const grupo = await Sinadef.find({ESTADO_CIVIL: 'DIVORCIADO'})
    console.log('--- Datos de los registro --- ', grupo);
}



//Probando las consultas y funciones
//allDocuments();
filtroporId();
//filtroporGrupo();

// Para corregir error al mostrar resultados
const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };
