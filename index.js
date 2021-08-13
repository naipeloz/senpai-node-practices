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


app.get('/dataCiudad/:id',(req, res)=>{    
    const id = req.params.id;
    const dataCiudades = data.dataCiudades;
    // NO ES LO MIMSO
    // const respuesta = tmpCiudades.map((ciudad)=>{
    //     if(ciudad.id == id){
    //         return ciudad;
    //     }
    // })    
    const respuesta = dataCiudades.filter((item)=>{
        return item.id == id;
    })
    res.json(respuesta);     
});


app.post('/dataCiudadMes',(req, res)=>{    
    const id = req.body.id;
    const dataCiudadesMes = data.dataCiudadesMes;
    const respuesta = dataCiudadesMes.filter((item)=>{
        return item.id == id;
    })
    res.json(respuesta);     
});

app.listen(80);
