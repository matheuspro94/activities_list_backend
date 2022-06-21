import express from 'express'
import routes from './router'
import cors from 'cors'

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())

app.use(express.json())

app.use(routes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
