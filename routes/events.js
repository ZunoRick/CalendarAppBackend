/*
  Rutas de eventos / events
  host + /apí/events
*/

const { Router } = require('express')
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt')
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events')
const { isDate } = require('../helpers/isDate')

const router = Router()

router.use(validarJWT)

// Obtener eventos
router.get('/', getEventos)

// Crear un evento
router.post('/',
  [
    check('title', 'El título es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha de finalización es obligatoria').custom(isDate),
    validarCampos
  ],
  crearEvento
)

// Actualizar un evento
router.put('/:id',
  [
    check('title', 'El título es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha de finalización es obligatoria').custom(isDate),
    validarCampos
  ],
  actualizarEvento
)

// Borrar evento
router.delete('/:id', eliminarEvento)

module.exports = router
