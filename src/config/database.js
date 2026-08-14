const mongoose = require('mongoose');

async function connectDB() {
  // const uri = process.env.MONGODB_URI;
  const uri = "mongodb+srv://senthil:senthilkavi0721@cluster0.322pc6n.mongodb.net/?appName=Cluster0"

  if (!uri) {
    throw new Error('MONGODB_URI is not set. Add it to backend/.env — see .env.example.');
  }

  mongoose.set('strictQuery', true);

  await mongoose.connect(uri);

  console.log(`MongoDB connected -> db: "${mongoose.connection.name}"`);

  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err.message);
  });

  return mongoose.connection;
}

module.exports = connectDB;
