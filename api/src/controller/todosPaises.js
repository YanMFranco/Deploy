const axios = require('axios');
const { Country, Tourism } = require("../db");
const url = "https://restcountries.com/v3.1/all";

const todosPaises = async () => {
    try {

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

        db = await Country.findAll({
            include: [{ model: Tourism }],
            order: [['nombre', 'ASC']]
        });

        return db;
    } catch (error) {
        console.log(error);
    }
}

module.exports = todosPaises;