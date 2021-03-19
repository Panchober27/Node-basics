const express = require("express");
const path = require('path');


const app = express();

// Set.
const port = process.env.PORT || 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Static files.
app.use(express.static(path.join(__dirname, 'public')));

// Routes.
app.use(require("./routes/index"));

// LS.
app.listen(port, () => {
  console.log(`Servidor listo y funcionando en el puerto: ${port}`);
});
