const { Router } = require('express');
const router = Router();
let multer = require('multer');
let upload = multer();

const { getReservaByID, getPlatos, updateReserva, getImagePlatos, createReserva, getPlatosByCategoria, getPlatosVegetarianos, getPlatosNoVegetarianos } = require('../controllers/index.controller');
/**
 * @swagger
 * components:
 *      schemas:
 *       Reserva:
 *          type: object
 *          required:
 *              - fecha
 *              - hora
 *              - cantidad
 *          properties:
 *              fecha:
 *                 type: string
 *                 format: date
 *                 description: La fecha de la reserva.
 *              hora:
 *                 type: string
 *                 enum: [20:00, 20:30, 21:00, 21:30]
 *                 description: La hora de la reserva.
 *              cantidad:
 *                 type: integer
 *                 format: int32
 *                 description: La cantidad de personas para la reserva
 *              observacion:
 *                 type: string
 *                 description: Observacion para la reserva
 *          example:
 *              fecha: 2021-09-30
 *              hora: 21:00
 *              cantidad: 5
 *              observacion: Una mesa afuera
 */

/**
 * @swagger
 * /reserva/{id}:
 *  get:
 *    description: Usar para obtener una reserva en particular
 *    tags:
 *      - Reserva
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id numerica de la reserva
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      '404':
 *        description: No existe una reserva con ese ID
 *      default:
 *        description: Pedido incorrecto
 */
router.get('/reserva/:id', getReservaByID);
/**
 * @swagger
 * /platos:
 *  get:
 *    description: Usar para obtener todas los platos
 *    tags:
 *      - Plato
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      default:
 *        description: Error 
 */
router.get('/platos', getPlatos);
/**
 * @swagger
 * /platos/{categoria}:
 *  get:
 *    description: Usar para obtener todos los platos de una categoria particular
 *    tags:
 *      - Plato
 *    parameters:
 *      - in: path
 *        name: categoria
 *        description: Categoria del plato
 *        required: true
 *        schema:
 *          type: string
 *          enum: [Carne, Ensalada, Postre, Pescado, Sandwich]
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      '404':
 *        description: Pedido incorrecto
 *      default:
 *        description: Pedido incorrecto
 */
router.get('/platos/:categoria', getPlatosByCategoria);
/**
 * @swagger
 * /platosVegetarianos:
 *  get:
 *    description: Usar para obtener todos los platos vegetarianos
 *    tags:
 *      - Plato
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      default:
 *        description: Pedido incorrecto
 */
router.get('/platosVegetarianos', getPlatosVegetarianos);
/**
 * @swagger
 * /platosNoVegetarianos:
 *  get:
 *    description: Usar para obtener todos los platos no vegetarianos
 *    tags:
 *      - Plato
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      default:
 *        description: Pedido incorrecto
 */
router.get('/platosNoVegetarianos', getPlatosNoVegetarianos);
/**
 * @swagger
 * /platos/images/{id}:
 *  get:
 *    description: Usar para obtener la imagen de un plato en particular
 *    tags:
 *      - Plato
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id numerico del plato
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      '404':
 *        description: No existe un plato con ese ID
 *      default:
 *        description: Pedido incorrecto
 */
router.get('/platos/images/:id', getImagePlatos);
/**
 * @swagger
 * /reserva/create:
 *  post:
 *   description: Crea una nueva Reserva
 *   tags: 
 *     - Reserva     
 *   requestBody:
 *     required: true
 *     content:
 *          multipart/form-data:
 *              schema:
 *                  $ref: '#/components/schemas/Reserva'
 *   responses:
 *        '200':
 *          description: La reserva ha sido creada correctamente.
 *        default: 
 *          description: Error
 */
router.post('/reserva/create',upload.none(), createReserva);
/**
 * @swagger
 * /reserva/{id}:
 *  post:
 *   description: Modificar una reserva existente
 *   tags: 
 *     - Reserva
 *   parameters:
 *      - in: path
 *        name: id
 *        description: id numerico de la reserva
 *        required: true
 *        schema:
 *          type: integer     
 *   requestBody:
 *     required: true
 *     content:
 *          multipart/form-data:
 *              schema:
 *                  $ref: '#/components/schemas/Reserva'
 *   responses:
 *        '200':
 *          description: La reserva ha sido modificada correctamente.
 *        '404':
 *          description: No se pudo modificar la reserva porque los valores son invalidos o la reserva no existe.
 *        default: 
 *          description: Error
 */
router.post('/reserva/:id', upload.none(), updateReserva);

module.exports = router;
