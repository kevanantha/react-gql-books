if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}
const express = require('express')
const graphqlHttp = require('express-graphql')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')

const schema = require('./schema/schema')

const PORT = process.env.PORT || 3000

const app = express()

mongoose
  .connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(_ => console.log('connect to db'))
  .catch(err => console.log(err))

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(
  '/graphql',
  graphqlHttp({
    schema,
    graphiql: true
  })
)

app.listen(PORT, () => console.log(`Server runs on PORT: ${PORT}`))
