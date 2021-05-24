# API con node.js

## Link deploy de Heroku: https://romivire-servicioweb.herokuapp.com

Routes para la API
  * GET PLATOS: https://romivire-servicioweb.herokuapp.com/platos : obtener todos los platos
  * GET RESERVA: https://romivire-servicioweb.herokuapp.com/reserva/id : obtiene la reserva con el id solicitado. Por ejemplo:https://romivire-servicioweb.herokuapp.com/reserva/1
  * POST RESERVA: https://romivire-servicioweb.herokuapp.com/reserva/id : permite modificar los datos de una reserva. En el body del request se deben especificar los siguientes parametros (ejemplo)
    * "fecha" = 2020-02-27
    * "hora" = 19:00:00 
    * "cantidad personas" = 6 
    * "observacion" = Esto es un simulacro
