const mongodb=require('mongodb');
const MongoClient= mongodb.MongoClient;

const protocol= 'mongodb:/';
const server = 'localhost:27017';
const databaseName='Students';

const connectionString=`${protocol}/${server}/${databaseName}`;

MongoClient.connect(connectionString)
.then((databaseConnection)=>{
    databaseConnection.collection('Names')
    .insert({
        firstName:'Ivan',
        lastName:'Kolev',
        age:22
    }).then(console.log)
})