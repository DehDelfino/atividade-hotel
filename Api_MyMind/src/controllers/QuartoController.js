

const knex = require('../database')


const {v4: uuidv4} = require('uuid')


module.exports = {

  //Get
  async index(request, response, next){
      try {
        const resultados = await  knex("Quarto")
        return response.json(resultados)
        
      } catch (error) {
        next(error)
      }
     
   },

   //Post
   async create(request, response, next){
 
     try{


      try {
        var quartos = await  knex("Quarto")
      } catch (error) {
        var quartos = []
      }

      
 
       const {
       quantidade_de_cama,
       numero,
       andar

        
      } = request.body

      const quarto = quartos.findIndex( quarto => quarto.numero === numero)


       
      
      if(quarto < 0){
        
        

        await knex('Quarto').insert({
          id:uuidv4(),
          quantidade_de_cama,
          numero,
          andar
         })
 
         return response.status(201).send("Quarto cadastrado com sucesso")

      }

      else{
        return response.status(201).send("Quarto ja cadastrado")
      }

      
 
 
     }catch (error){
       next(error)
     }
 
     
   },

   //Put

   async update(request, response, next){
    try {

      // nome,usuario,senha, endereco,telefone, email
      const alteracaoQuarto = request.body

      // const {nomeUsuario} = request.params
      
      
      
      await knex("Quarto").update({
        quantidade_de_cama:alteracaoQuarto.quantidade_de_cama ,
        numero:alteracaoQuarto.numero ,
        
      })
      
      return response.send(`Quarto ${alteracaoQuarto.numero}, Atualizado com sucesso`)
      
    } catch (error) {
      next(error)
    }
   },



   async delete(request,response, next){

    try {

      const {numeroQuarto}= request.params
   
     
      
      
      


      //Verifica se as senhas batem
      // if(!await bcrypt.compare(senhaUsuario,user.senhaUsuario)){

      //   return response.send("Houve algum problema")


        
      
      
      await knex("Quarto").where({numeroQuarto}).del()

      return response.send(`${numeroQuarto}, deletado com sucesso`)
        
      

      
      
    } catch (error) {
      next(error)
    }
   },
   
  
  
}