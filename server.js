const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Handle unhandled rejections
process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 🔥 Shutting down...');
  console.error(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB)
  .then(con => console.log(con + 'Connected to natours database'));

const port = process.env.PORT || 3000;

const server = (app.createServer = app.listen(port, () => {
  console.log(`The server is listening to request on port ${port}`);
}));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log('UNHANDLED REJECTION! 🔥 Shuting down...');
  console.error(err.name, err.message);
  server.close(() => process.exit(1));
});
