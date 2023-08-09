
const express = require('express');
const routes = require('./routes/routes');
const cors = require('cors')
const app = express();



app.use(express.json());
app.use(cors());
app.use(routes);

app.get('/',(req,res)=>{
  res.json(res.body);
})

app.post("/users", (req, res) => {
  const { nome, email, procedimento,valor } = req.body;

  console.log({ nome, email,procedimento,valor });

  res.status(201).json({ nome, email, procedimento,valor});
});

app.listen(3000, ()=>{
  console.log('listning on port 3000')
})


