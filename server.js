import express from 'express'
import handler from './api/contact.js'

const app = express()
app.use(express.json())

app.post('/api/contact', (req, res) => handler(req, res))

const PORT = 3001
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`)
})
