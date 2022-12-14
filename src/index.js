const mongoose = require('mongoose');
require('dotenv').config();
const app = require('./app');
const port = process.env.PORT || 3000

mongoose.connect(
    process.env.MONGODB_URI
).then( () => {
        app.listen(port,(res)=>{
            app.get('/',(req, res)=>{res.status(200).send(`Server is running on port ${port}`)})
            console.log(`Server is running on port ${port}`);
        });
    }
).catch( (err) => {
        console.log("No se conecto a la base de datos");
    }
);