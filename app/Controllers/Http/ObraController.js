'use strict'

class ObraController {

  async index ({ request, response, view }) {

     const dados = request.all();
     console.log(dados)
     let retorno = { "cod_ocorrencia": "23"}
     response.status(200).send(retorno)
  }

  async upload ({ request, response, view }) {

     const file  = request.all();

     console.log("Upload -> " + file.nome);
  }

}

module.exports = ObraController
