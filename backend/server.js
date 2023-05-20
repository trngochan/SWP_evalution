const express = require('express');
const app = express();
// cau hinh body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


require('./routers/home.router')(app);

app.listen(9000,()=> {
   console.log('Server is running on port 9000');
})