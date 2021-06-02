const { Pool } = require('pg');
const connectionString = 'postgres://qowccxtsleidpp:4eae41bd9221066826cdb4ce29cec80cdc3615f860a5478d773e86b9666e54a9@ec2-52-203-27-62.compute-1.amazonaws.com:5432/d8v6tffvtv17f8'


const poolQuery = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});


const getReservaByID = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await poolQuery.query('SELECT * FROM reservas WHERE id = $1', [id]);
    res.status(200).json(response.rows);
};

const getPlatos = async (req, res) => {
    const response = await poolQuery.query('SELECT * FROM platos;');
    res.status(200).json(response.rows);
};

const updateReserva = async (req, res) => {
    const id = parseInt(req.params.id);
    var data = req.body;

    const response =await poolQuery.query('UPDATE reservas SET fecha = $1, hora = $2, cantidad_personas = $3,observacion = $4 WHERE id = $5', [
        data.fecha,
        data.hora,
        data.cantidad,
        data.observacion,
        id
    ]);
    res.status(200).json('Reserva Updated Successfully');
};


module.exports = {
    getReservaByID, getPlatos, updateReserva
};
const { poolQuery } = require('pg');
const connectionString = 'postgres://qowccxtsleidpp:4eae41bd9221066826cdb4ce29cec80cdc3615f860a5478d773e86b9666e54a9@ec2-52-203-27-62.compute-1.amazonaws.com:5432/d8v6tffvtv17f8'


const poolQuery = new poolQuery({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});


const getReservaByID = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await poolQuery.query('SELECT * FROM reservas WHERE id = $1', [id]);
    if(response.rows.length >0)
        res.status(200).json(response.rows);
    else
        res.sendStatus(404);
};

const getPlatos = async (req, res) => {
    const response = await poolQuery.query('SELECT id,nombre,precio,vegetariano,categoria_plato FROM platos;');
    res.status(200).json(response.rows);
};

const getPlatosByCategoria = async (req, res) => {
    const categoria = req.params.categoria;
    const response = await poolQuery.query('SELECT id,nombre,precio,vegetariano,categoria_plato FROM platos WHERE categoria_plato = $1',[categoria]);
    res.status(200).json(response.rows);
};

const getPlatosVegetarianos = async (req, res) => {
    const response = await poolQuery.query("SELECT id,nombre,precio,vegetariano,categoria_plato FROM platos WHERE vegetariano = 'Si'");
    res.status(200).json(response.rows);
};

const getPlatosNoVegetarianos = async (req, res) => {
    const response = await poolQuery.query("SELECT id,nombre,precio,vegetariano,categoria_plato FROM platos WHERE Vegetariano = 'No'");
    res.status(200).json(response.rows);
};

const getImagePlatos = async (req, res) => {
    const id = parseInt(req.params.id);
    const fs = require('fs');
    const response = await poolQuery.query("SELECT encode(imagen,'base64') FROM platos WHERE id = $1", [id]);
    if(response.rows.length >0){
        var respuesta=Buffer.from(response.rows[0].encode,'base64');
        var rta=respuesta.toString('utf-8');
        const mimeType = 'image/png';
    
        res.status(200).send(`<img src="data:${mimeType};base64,${rta}" />`);
    }
    else{
        res.sendStatus(404);
    }
};

const updateReserva = async (req, res) => {
    const id = parseInt(req.params.id);
    const estado='Pendiente'
    try{
        var data = req.body;

        const response =await poolQuery.query('UPDATE reservas SET fecha = $1, hora = $2, cantidad_personas = $3,observacion = $4,estado = $5 WHERE id = $6', [
            data.fecha,
            data.hora,
            data.cantidad,
            data.observacion,
            estado,
            id
        ]);
        res.status(200).json('Reserva modificada');
    }
    catch(e){
        res.status(404).json('No se pudo modificar la reserva porque los valores son invalidos o la reserva no existe');
    }

    
};

const createReserva = async (req, res) => {   
    try{
        var data = req.body;
        const estado='Pendiente'

        const response =await poolQuery.query('INSERT INTO reservas (fecha,hora,cantidad_personas,observacion,estado) VALUES ($1,$2,$3,$4,$5) RETURNING id', [
            data.fecha,
            data.hora,
            data.cantidad,
            data.observacion,
            estado
        ]);
        const idReserva=response.rows[0].id;
        res.status(200).json({
            message: 'Reserva creada correctamente',
            body: {
                idReserva
            }
        })
        
    }
    catch(e){
        res.status(404).json('No se pudo crear la reserva, los datos son invalidos');
    }
};

module.exports = {
    getReservaByID, getPlatos, updateReserva, getImagePlatos, createReserva, getPlatosByCategoria, getPlatosVegetarianos, getPlatosNoVegetarianos
};