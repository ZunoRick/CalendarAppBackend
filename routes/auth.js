/*
  RUtas de usuarios / Auth
  host + /apí/auth
*/

const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  console.log('se require /');

  res.json({
    ok: true,
  })
})

module.exports = router