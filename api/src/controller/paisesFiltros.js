const axios = require('axios');
const { Country, Tourism } = require("../db");
const url = "https://restcountries.com/v3.1/all";

const paisesFiltros = async (page,fA_Z,fPo,fCo) => {
    try {
        console.log(page);
        console.log(fA_Z);
        console.log(fPo);
        console.log("Paso por controller");
        if (!page) { return "Pagina es requerida" }
        const limit = 10;
        const offset = (page - 1) * limit;
        let db = await Country.findAll({ include: [{ model: Tourism }] });

        if (!db.length) {
            const paisesAll = axios.get(url);
            const paisesRes = await paisesAll.then((response) => (response.data));
            const paisesDetalle = paisesRes.map(info => {
                return {
                    id: info.cca3,
                    nombre: info.name.common,
                    imagen: info.flags.png,
                    continente: info.continents[0],
                    capital: info.capital != null ? info.capital[0] : "Sin informacion",
                    subregion: info.subregion != null ? info.subregion : "Sin informacion",
                    area: info.area,
                    poblacion: info.population,
                }
            });
            Country.bulkCreate(paisesDetalle);
        }
        
        let total = await Country.count();

        if (fCo=="todos") {
            total = await Country.count();
        }

        if (fCo!="todos") {
            total = await Country.count({
                where: {
                    continente:fCo
                }
            });
        }

        
        let pagesMaxima = Math.ceil(total / limit);
        let orderAZ=[];
        let orderPo=[];
        
        if(fA_Z!==undefined){
            orderAZ = (fA_Z==="ASC") ? [['nombre', 'ASC']] : [['nombre', 'DESC']];
        }
        if(fPo!==undefined){
            orderPo = (fPo==="ASC") ? [['poblacion', 'ASC']] : [['poblacion', 'DESC']];
        }

        if(fCo==="todos"){
            db = await Country.findAll({
                include: [{ model: Tourism }],
                limit: limit,
                offset: offset,
                order: [
                    ...(orderPo || []),
                    ...(orderAZ || []),
                ]
            })
        }else{
            console.log("ingrese aqui");
            console.log(orderPo);
            db = await Country.findAll({
                include: [{ model: Tourism }],
                where: {
                    continente: fCo
                },
                limit: limit,
                offset: offset,
                order: [
                    ...(orderAZ || []),
                    ...(orderPo || []),
                ]
        })
        }
        
        return { paginadoMaximo: pagesMaxima, datos: db };

    } catch (error) {
        console.log(error);
    }
}

module.exports = paisesFiltros;