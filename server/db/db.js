const { MongoClient } = require('mongodb');
const uri = process.env.DB_URI;
const dbName = 'yumm';

exports.connectUsers = async () => {
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db(dbName);
  const collection = db.collection('yummUsers');

  return { collection, client };
};

exports.connectRecipes = async () => {
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db(dbName);
  const collection = db.collection('yummRecipes');

  return { collection, client };
};

