import express from 'express'
import router from './routes/router.js'
import cors from 'cors'

const app = express()

const port = 4000

app.use(cors())
app.use('/', router)

app.listen(4000, () => {
  console.log(`Server started in port ${port}`)
})

export default app