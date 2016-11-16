const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const protocol = 'mongodb:/';
const server = 'localhost:27017';
const databaseName = 'TelerikFriends';


const connectionString = `${protocol}/${server}/${databaseName}`;

const mongoose = require('mongoose');

var employeeSchema = require('employeeShema').employeeSchema;
const Model = mongoose.model('Employee', employeeSchema);

Model.connect(connectionString);

MongoClient.connect(connectionString)
    .then((databaseConnection) => {
        databaseConnection.collection('TelerikEmployees')
            .insert({
                firstName: 'Ivan',
                lastName: 'Kolev',
                age: 22
            }).then(console.log)
    })