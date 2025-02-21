/*
  RUtas de usuarios / Auth
  host + /apí/auth
*/

const { Router } = require('express')
const { check } = require('express-validator')
const router = Router()
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth')

router.post('/',
  [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
  ],
  loginUsuario)
router.post(
  '/new', 
  [ // middlewares
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
  ],
  crearUsuario)
router.get('/renew', revalidarToken)

module.exports = router