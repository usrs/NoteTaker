const router = require('express').Router()
const List = require('../list.js')

const list = new List()



router.get('/api/notes', (req, res) => {
  let items = list.getItems()
  res.json(items)
})

router.post( )

router.put()

router.delete()

module.exports = router