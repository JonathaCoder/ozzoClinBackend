import { cadaster } from "../src/cadaster"

export default getUsers = (_,res) => {
  const q = "SELECT * FROM cadaster"
  

  cadaster.query(q,(err,data)=> {
   if(err) return res.json(err)

   return res.status(200).json(data)
  }) 

  
}    