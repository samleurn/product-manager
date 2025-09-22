import express from 'express'

import { _api } from './interface/main-routes.js'

const app = express()

app.use(express.json())
app.use('/api', _api)

export { app }