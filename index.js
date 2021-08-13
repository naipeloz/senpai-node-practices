const express = require('express');
const data = require('./data');
const app = express();

app.use(express.json());

app.get('/', (request, response)=>{
    response.responseStatus = 200;
    response.send('Welcome Grupo 2');
});

app.get('/ciudades',(req, res)=>{
    res.json(data.ciudades);     
});


app.get('/temperatura/:id',(req, res)=>{
    
    const id = req.params.id;
    const tmpCiudades = data.tmpCiudades;
    // NO ES LO MIMSO
    // const respuesta = tmpCiudades.map((ciudad)=>{
    //     if(ciudad.id == id){
    //         return ciudad;
    //     }
    // })    
    const respuesta = tmpCiudades.filter((item)=>{
        return item.id == id;
    })
    res.json(respuesta);     
});

app.listen(80);
