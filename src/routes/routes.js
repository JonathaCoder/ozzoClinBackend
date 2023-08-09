const express = require('express');
const { route } = require('express/lib/application');
const { status } = require('express/lib/response');
const routes = express.Router();


const users = [{
  nome:'ozzoclinic',
  email:"clinicaozzoclin2005@gmail.com",
  password:"20052023"
}]

let ok = "";


routes.post('/login', (req , res) => {
const {email,password}=req.body

const user = users.find(user => user.email === email && user.password === password);

if(user){
  return res.status(200).json({ 
    user:user,
    ok:true,
  })
}
 

  res.status(401).json({message:'credenciais invalidas'})

});

module.exports = routes;