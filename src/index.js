const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const app = express();
app.use(cors());
app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin','*');

  res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');

  res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,multipart/form-data');

  next();
});

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
app.use(require('./routes/index'));

app.listen(process.env.PORT || 8080, 
	() => console.log("Server is running...")); 

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "La Borgonia API",
      version: "1.0.0",
      description:
        "Documentación API",
      contact: {
        name: "Romina Vitacca",
      },
    },
    servers: [
      {
        url: "https://romivire-servicioweb.herokuapp.com",
      },
    ],
  },
  apis: ["src/routes/index.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);
