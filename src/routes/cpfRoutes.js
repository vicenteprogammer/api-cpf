import { Router } from "express";
import validation from "../services/cpfvalidation.js";

const routes = Router();

routes.get('/',(req,res)=>{
    res.send('Bem vindo ao validador de cpf')
})

routes.get('/:cpf',async (req, res) =>{
    const cpf = req.params
    const verify = await validation(cpf.cpf)
    res.send(verify)
    
})

export default routes;