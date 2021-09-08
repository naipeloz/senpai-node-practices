const express = require('express');
const router = express.Router();

// AUTENTICACION
const { TOKEN_SECRET, verifyToken } = require('../middlewares/jwt');


// TOKEN eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRmVkZXJpY28iLCJlbWFpbCI6ImZlZGVyaWNvQG1vbmtpcy51eSIsInBhc3N3b3JkIjoiJDJiJDEwJEw1UC4zVGo4QXlGWjRKU1U2bDBUSi5oeGhVUTRvTlcvSDBGWE1sWFE3ZjZyZXhmMlJBTTVtIiwiaWF0IjoxNjMwNjMwMTcyfQ.q-Bih7xuwYnFJ_JEbZ1zdWUMxv9mzzwjRUGNCxmi63g

let data = [
  {
    currency: 'UYU',
    value: 44
  },
  {
    currency: 'ARG',
    value: 150
  },
  {
    currency: 'BR',
    value: 10
  },
];

router.get('/', (request, response) => {
  response.render('groupOne/index');
})

// RUTA GET // PASO DIVISA, RETORNA EL VALOR DE LA DIVISA FRENTE AL DOLAR.
router.get('/getDivisa/:currency', (request, response) => {        
   
   const currency = request.params.currency;
   const selCurrency = data.find((item)=> item.currency == currency);

    if(selCurrency){
      
      response.json({
        result:true,
        data:selCurrency,
        error:''
      });

    }else{
      
      response.json({
        result:false,
        data:'',
        error:'No se encontró la divisa solicitada'
      });

    }
})

// RUTA POST // PASO DIVISA  y CANTIDAD DE DINERO, RETORNO LA CANIDAD DE DOLARES.

router.post('/cotizacion', (request,response)=>{
  const body = request.body;    

  const getCurrency = data.find((item)=> item.currency == body.currency);
  let error = '';
  let cotizacion = {};
  let result = false;

  if(getCurrency){
      //GENERO COTIZACION
      const value = Math.round(body.value/getCurrency.value);
      cotizacion = {
        currency:'USD',
        value: value
      }
      result = true;      
  }else{    
    error = `No se econtró la divisa: ${cotizacion.currency}`;      
  }
  response.json({
    result,
    cotizacion,
    error
  });
})

// RUTA POST PROTEGIDA // CARGA EL VALOR DE LA DIVISA CONTRA EL DOLAR 
router.post('/setDivisa', verifyToken, async (request,response)=>{
    const body = request.body;    
    let status = '';
    const tmpCurrency = {
      currency: body.currency,
      value: body.value,
    }
    const getCurrency = data.find((item)=> item.currency == tmpCurrency.currency);
    if(getCurrency){
      data.map((item)=> {
        if(item.currency == tmpCurrency.currency){
          item.value = tmpCurrency.value;
        }
      });
      status = `Se modifico la divisa ${tmpCurrency.currency}`;       
    }else{
      data.push(tmpCurrency);      
      status = `Se agrego la divisa ${tmpCurrency.currency}`;      
    }
    response.json({
      result:true,
      data: tmpCurrency,
      status
    });
})



module.exports = router;