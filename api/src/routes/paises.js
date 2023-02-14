const { Router } = require('express');
const obtenerPaises = require('../controller/obtenerPaises')
const obtenerPaisId = require('../controller/obtenerPaisId')
const paisesFiltros = require('../controller/paisesFiltros');
const todosPaises = require('../controller/todosPaises');

const router = Router();

router.get('/Paises', async (req, res) => {
    try {
        const { page,nombre} = req.query;
        const busqueda = await obtenerPaises(page,nombre);
        res.status(200).send(busqueda);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/Paises/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const idMayuscula = id.toUpperCase();
        const busqueda = await obtenerPaisId(idMayuscula);
        res.status(200).send(busqueda);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/filtros', async (req, res) => {
    try {
        var {page,fA_Z,fPo,fCo} = req.query;
        fCo = fCo || 'todos';
        const filtros = await paisesFiltros(page,fA_Z,fPo,fCo);
        res.status(200).send(filtros);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/todo', async (req, res) => {
    try {
        const busqueda = await todosPaises();
        res.status(200).send(busqueda);
    } catch (error) {
        res.status(400).send(error.message)
    }
});


module.exports = router;