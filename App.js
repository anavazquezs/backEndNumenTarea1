const express = require('express');
const app = express();
const port = 3000;

/* 1- Una ruta que reciba nombre y apellido por medio de params (ruta parametrizada) y devuelva por un res.send un query string armando un saludo */

app.get('/person/:firstName/:lastName', (req, res) => {
    res.send(`${req.params.firstName} ${req.params.lastName}, ${req.query.saludo}`);
});

/* 2- Crear una ruta dividir la cual reciba dos parametros (ruta parametrisada) divisor y dividendo, la misma tiene que devolver un res.json({error: "no se puede dividir por cero"}) si el usuario ingresa un 0, si no es el caso devolver res.json({resultado}) */

app.get('/dividir/:dividendo/:divisor', (req, res) => {
    if(req.params.divisor === 0) {
        res.json({
            error: "No se puede dividir por cero",
        })
    } else {
        let num1 = Number(req.params.dividendo);
        let num2 = Number(req.params.divisor);
        let resultado = num1/num2;
        res.json({
            resultado: resultado,
        })
    }
});

/*3- Crear una ruta que sume dos valores (ruta parametrizada), pero poner una condicion de que no se puedan enviar numeros menores que cero el resultado se debe deolver por medio de un res.json({resultado}) */

app.get('/sumar/:valor1/:valor2', (req, res) => {
    if(req.params.valor1 < 0 || req.params.valor2 < 0) {
        res.json({
            error: 'No incluir valores menores a cero',
        })
    } else {
        let num1 = Number(req.params.valor1);
        let num2 = Number(req.params.valor2);
        let resultado = num1 + num2;
        res.json({
            resultado: resultado,
        })
    }
});

/*4- Crear una ruta que reciba un numero (ruta con query) si el numero es impar debe devolver un res.send("no autorizado") , y si el numero es par debe devolver res.send("autorizado") */

app.get('/esImpar', (req, res) => {
    if(req.query.numero % 2 === 0) {
        res.send('Autorizado')
    } else {
        res.send('No autorizado')
    }
});

/*5- Una ruta lista de compras (ruta con query) que devuelva un objeto con 5 productos, se debe usar res.json({objeto})*/

app.get('/listaDeCompras', (req, res) => {
    res.json(req.query);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});