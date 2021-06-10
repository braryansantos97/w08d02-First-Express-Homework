const express = require('express');
const app = express();
const PORT = 3000;


app.get('/greeting/:name', (req, res) => {
  console.log(req.params.name)
  res.send(`What's up ${req.params.name}`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
  const percentage = (num, per) => {
  return (num/100)*per;
  }
  let total = parseInt(req.params.total);
  let tipPercentage = parseInt(req.params.tipPercentage);
  res.send(`${percentage(total, tipPercentage)}`)
})

















app.listen(PORT, () => {
  console.log('We are here', PORT)
});
