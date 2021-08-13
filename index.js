const express = require('express');
const data = require('./data');
const app = express();



app.use(express.json());

app.get('/', (request, response)=>{
    response.responseStatus = 200;
    response.send('Welcome Grupo 2');
});

app.get('/ciudades',(req, res)=>{
    res.json(data.ciudades)     
});

// //ESTA ES LA MEJOR FORMA DE TRAR PARAMETROS
// app.get('/test/:name',(req, res)=>{
//     const nombre = req.params.name;
//     res.send(`Este es el nombre, ${nombre} ?`);
// })
// //ACEPTA TODAS LAS LLAMADAS
// app.all('/myPost/:name',(req, res)=>{
//     // ESTO VIENE EN EL GET
//     const misParametros = req.params;
//     console.log(misParametros);
//     //ESTO VIENE EN EL BODY
//     const myBody  = req.body;
//     console.log(myBody);
//     // res.send(`Este es el nombre, ${misParametros.name}  <br > ${myBody}`);
//     // res.send(`<br /> ${myBody.nombre} ${myBody.age} ${myBody.Color}`);
//     res.json(myBody);
// })



app.listen(80);
