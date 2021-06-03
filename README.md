# API con node.js

## Link deploy de Heroku: https://romivire-servicioweb.herokuapp.com

Routes para la API
  * GET PLATOS -> https://romivire-servicioweb.herokuapp.com/platos : obtiene todos los platos (retorna todos los atributos menos la imagen)
  * GET PLATOS BY CATEGORIA -> https://romivire-servicioweb.herokuapp.com/platos/{categoria} : obtiene todos los platos de la categoria especificada en {categoria}. Por ejemplo https://romivire-servicioweb.herokuapp.com/platos/Carne. Las categorias disponibles son: Carne, Ensalada, Postre, Pescado, Pasta, Sandwich. 
  * GET PLATOS VEGETARIANOS -> https://romivire-servicioweb.herokuapp.com/platosVegetarianos : obtiene todos los platos vegetarianos
  * GET PLATOS NO VEGETARIANOS -> https://romivire-servicioweb.herokuapp.com/platosNoVegetarianos : obtiene todos los platos no vegetarianos
  * GET IMAGE PLATO -> https://romivire-servicioweb.herokuapp.com/platos/images/{id} : obtiene la imagen del plato indicado por {id}. Por ejemplo https://romivire-servicioweb.herokuapp.com/platos/images/1
  * GET RESERVA BY ID: https://romivire-servicioweb.herokuapp.com/reserva/{id} : obtiene la reserva con el {id} solicitado. Por ejemplo: https://romivire-servicioweb.herokuapp.com/reserva/1
  * POST MODIFICAR RESERVA -> https://romivire-servicioweb.herokuapp.com/reserva/id : permite modificar los datos de una reserva segun su id. Esta reserva modificada, pasara a tener el estado 'PENDIENTE'. Por ejemplo: https://romivire-servicioweb.herokuapp.com/reserva/1 . En el body del request se deben especificar los siguientes parametros (ejemplo)
    * "fecha" = 2021-10-27
    * "hora" = 19:00:00 
    * "cantidad personas" = 6 
    * "observacion" (parametro opcional) = Esto es un simulacro para modificar reserva
  * POST CREAR RESERVA -> https://romivire-servicioweb.herokuapp.com/reserva/create : permite crear una nueva reserva con estado 'PENDIENTE'. En el body del request se deben especificar los siguientes parametros (ejemplo)
    * "fecha" = 2021-11-10
    * "hora" = 20:00:00 
    * "cantidad personas" = 6 
    * "observacion" (parametro opcional) = Esto es un simulacro para crear reserva
   
