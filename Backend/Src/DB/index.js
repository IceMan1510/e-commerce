const mongoose = require('mongoose');

mongoose.connect(process.env.DB_STRING)
    .then(() => console.log('Connected!')).catch((err) => {
        console.log(err);
    });
