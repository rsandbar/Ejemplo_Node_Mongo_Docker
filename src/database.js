const mongoose = require('mongoose')

mongoose.connect('mongodb://databasemongo/Fullstack')
    .then(db => console.log('Db está conectada a', db.connection.host))
    .catch(err => console.error(err));
    

