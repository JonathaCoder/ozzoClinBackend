const express = require('express');
const routes = require('./routes/routes');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const app = express();

const user = new PrismaClient();

app.use(express.json());
app.use(cors());
app.use(routes);

app.get('/', (req, res) => {
  res.json(res.body);
})

app.post("/users", (req, res) => {
  const { nome, email, procedimento, valor } = req.body;

  if (!nome) {
    return res.status(404).json({
      message: "dados invalidos"
    })
  }

  user.cadaster.create({
    data: {
      name: nome,
      email: email,
      procedimento: procedimento,
      valor: valor

    }
  })

  return res.status(200).json({
    message: "dados inseridos com sucesso!"
  })

});


app.listen(3000, () => {
  console.log('listning on port 3000')
})


