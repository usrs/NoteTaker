const router = require('express').Router()
const fs = require('fs')

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/../public/index.html')
})

router.get('/notes', (req, res) => {
  res.sendFile(__dirname + '/../public/notes.html')
})



router.get('/api/notes', (req, res) => {
  let notes = fs.readFileSync(__dirname + '/../db/db.json')
  notes = JSON.parse(notes)
  res.json(notes)
})

router.post('/api/notes', (req, res) => {
  let notes = fs.readFileSync(__dirname + '/../db/db.json')
  notes = JSON.parse(notes)

  const note = {
    id: notes.length,
    title: req.body.title,
    text: req.body.text,
  }

  note.push(notes)

  fs.writeFileSync(__dirname + '/../db/db.json', JSON.stringify(notes))

  res.json(notes)
})

// router.put()

router.delete('/api/notes/:id', (req, res) => {
  const noteId = req.params.id
  let notes = fs.readFileSync(__dirname + '/../db/db.json')
  notes = JSON.parse(notes)

  notes.filter(function(note) {
    if (note.id === noteId) {
      return false
    }

    return true
  })

  fs.writeFileSync(__dirname + '/../db/db.json', JSON.stringify(notes))

  res.json(notes)

})

module.exports = router