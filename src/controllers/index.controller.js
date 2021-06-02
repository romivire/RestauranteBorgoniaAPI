const { Pool } = require('pg');
const connectionString = 'postgres://qowccxtsleidpp:4eae41bd9221066826cdb4ce29cec80cdc3615f860a5478d773e86b9666e54a9@ec2-52-203-27-62.compute-1.amazonaws.com:5432/d8v6tffvtv17f8'


const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});


const getReservaByID = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM reservas WHERE id = $1', [id]);
    if(response.rows.length >0)
        res.status(200).json(response.rows);
    else
        res.sendStatus(404);
};

const getPlatos = async (req, res) => {
    const response = await pool.query('SELECT * FROM platos;');
    res.status(200).json(response.rows);
};

const updateReserva = async (req, res) => {
    const id = parseInt(req.params.id);
    var data = req.body;

    const response =await pool.query('UPDATE reservas SET fecha = $1, hora = $2, cantidad_personas = $3,observacion = $4 WHERE id = $5', [
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
