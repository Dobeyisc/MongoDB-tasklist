const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB', error);
  }
}

async function insertTask(task) {
    const collection = client.db('tasklist').collection('tasks');
    
  try {
    const result = await collection.insertOne({ description: task, completed: false });
    console.log(`Tarea insertada con _id: ${result.insertedId}`);
  } catch (error) {
    console.error('Error al insertar la tarea', error);
  }
}

async function getAllTasks() {
  const collection = client.db('tasklist').collection('tasks');

  try {
    const tasks = await collection.find({}).toArray();
    console.log('Lista de tareas:');
    console.log(tasks);
  } catch (error) {
    console.error('Error al obtener las tareas', error);
  }
}

async function completeTask(taskId) {
  const collection = client.db('tasklist').collection('tasks');
  
  try {
      const filter = { _id: ObjectId(taskId) };
      const update = { $set: { completed: true } };

    const result = await collection.updateOne(filter, update);
    console.log(`${result.matchedCount} tarea(s) marcada(s) como completada(s)`);
  } catch (error) {
    console.error('Error al completar la tarea', error);
  }
}

async function deleteTask(taskId) {
  const collection = client.db('tasklist').collection('tasks');

  try {
    const result = await collection.deleteOne({ _id: ObjectId(taskId) });
    console.log(`${result.deletedCount} tarea(s) eliminada(s)`);
  } catch (error) {
    console.error('Error al eliminar la tarea', error);
}}

async function disconnectFromMongoDB() {
  try {
    await client.close();
    console.log('Desconexión exitosa de MongoDB');
  } catch (error) {
    console.error('Error al desconectar de MongoDB', error);
  }
}

(async () => {
    await connectToMongoDB();
  
    await insertTask('Hacer la compra');
    await insertTask('Estudiar para el examen');
    await getAllTasks();
    await completeTask('ID_DE_LA_TAREA');
    await deleteTask('ID_DE_LA_TAREA');
    await getAllTasks();
  
    await disconnectFromMongoDB();
  })();