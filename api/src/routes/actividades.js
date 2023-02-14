const {Router} = require('express');
const { Tourism, Country } = require('../db.js');

const router = Router();

router.get('/activitiesAll', async (req, res) => {
    try {
            const activities = await Tourism.findAll({ 
                include: Country  
                })
                return res.json(activities) 
    } catch (error) {
        res.send(error)
    }
})

router.post("/activities",async(req,res)=>{
    try {
        const { nombre, dificultad, duracion, temporada, id } = req.body;

        if (!nombre && !dificultad && !duracion && !temporada && !id) return res.status(400).send(JSON.stringify("FALTAN DATOS"));
        const obj = { nombre, dificultad, duracion, temporada };
        const newActivity = await Tourism.create(obj);
        await newActivity.addCountry(id);
        const busqueda = await Country.findAll({where:{id: id}, include: [{ model: Tourism }]});
        console.log(busqueda);
        res.status(200).send("Actividad creada correctamente en "+id);
        
    } catch (error) {
        res.status(400).send(error.message)
    }
});

module.exports= router;