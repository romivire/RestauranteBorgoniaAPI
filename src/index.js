const express = require('express');


const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
app.use(require('./routes/index'));

app.get("/", function (req, res) {
    res.send("<h1>Hello World!</h1>")
  })

/*   app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running...")); */
    app.listen(3000);
