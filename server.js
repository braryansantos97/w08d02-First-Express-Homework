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

app.get('/magic/:phrase', (req, res) => {
  let question = req.params.phrase
  let responses = ["It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"];
  let response = responses[Math.floor(responses.length * Math.random())];
  res.send(`${question}? <h1>${response}</h1>`)
})

















app.listen(PORT, () => {
  console.log('We are here', PORT)
});
