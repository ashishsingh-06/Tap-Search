const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const port = process.env.PORT || 8000;

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname + '/views')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',routes);


app.listen(port,()=>{

        console.log(`server started on port ${port}`);
});
