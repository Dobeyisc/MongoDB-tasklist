const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect()
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
  })

  .catch(err => console.error('Error al conectar a MongoDB', err))
  .finally(() => {
    client.close();
  });