const app = require('./app');

const PORT = 3000;
app.createServer = app.listen(PORT, () => {
  console.log(`The server is listening to request on port ${PORT}`);
});
