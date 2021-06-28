const express = require('express');
const cors = require('cors');


const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
app.use(require('./routes/index'));
app.use(cors);

app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin','*');

  res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');

  res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');

  next();
});

app.get("/", function (req, res) {
    res.send("<h1>API-romivire-servicioWeb</h1>")
  })

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running...")); 

