const express = require('express')
const mongoose = require('mongoose')

const app = express()

require('./database');

app.use(require('./routes/index.routes.js')); 

const puerto = 3000

app.listen(puerto)
console.log('Running on ${port}')

const {Sinadef} = require('./modeloSinadef')

app.get('/consultaAll', function(req, res)
{
    //const allDocuments = async () =>
    //{
        const sinadefAll = Sinadef.find()
        res.send('*** Datos de todos los documentos ***', sinadefAll)
    //}
});

app.get('/consultaDivorciados', function(req, res)
{
    const divorciados = Sinadef.find({ESTADO_CIVIL: 'DIVORCIADO'})
    const result = JSON.stringify(divorciados, getCircularReplacer());
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

//Probando las consultas
//allDocuments();
//filtroporId();
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
