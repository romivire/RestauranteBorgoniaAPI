const { Client } = require('pg');
const connectionString = 'postgres://qowccxtsleidpp:4eae41bd9221066826cdb4ce29cec80cdc3615f860a5478d773e86b9666e54a9@ec2-52-203-27-62.compute-1.amazonaws.com:5432/d8v6tffvtv17f8'


const client = new Client({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

const getReservaByID = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM reservas WHERE id = $1', [id]);
    res.json(response.rows);
};

const getPlatos = async (req, res) => {
    const response = await client.query('SELECT * FROM platos;');
    res.status(200).json(response.rows);
    client.end();
};


module.exports = {
    getReservaByID, getPlatos
};
