

/*

OPERAÇÕES BASICAS SOBRE DADOS

1) CREATE (criação ou inserção)
Cria um novo objeto dentro do banco de dados

2) RETRIEVE (recuperar ou listar)
 Obter de volta um ou mais objetos preexistentes no banco de dados

 3) UPDATE
  Atualizar os dados de um objeto preexistente no banco de dados

  4) DELETE
   Exclusão de um objeto do banco de dados

   (C)reate + (R)etrieve + (U)pdate + (D)elete = sigla CRUD


Verbos do protocolo http

VERBO                Operação
POST                CREATE
GET                 RETRIEVE
PUT                  UPDATE
DELETE               DELETE



*/

const Curso = required('../models/Curso')

const controller = {}  // Objeto vazio

//Operação CREATE
controller.novo = async (req, res) =>{
   // Usa os dados que chegam dentro do body da requisição e os
   // envia o BD  para a criação de um novo objeto 
   try{
    await Curso.create(req.body)
    //HTTP 201:Created
    res.status(201).end()
   }
   catch(erro){
       console.log(erro)
       // HTTP 500: Internal Server Eroor
       res.status(500).send(err0)
   }
}
module.exports = controller
