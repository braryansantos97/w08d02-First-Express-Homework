const express = require('express');
const app = express();
const PORT = 3000;


app.get('/greeting/:name', (req, res) => {
  console.log(req.params.name)
  res.send(`What's up ${req.params.name}`)
})



















app.listen(PORT, () => {
  console.log('We are here', PORT)
});
