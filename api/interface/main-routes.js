import { Router } from 'express'

import { _home } from '../routes/home-route.js'
import { _form } from '../routes/form-route.js'

const _api = Router()

_api.use('/', _home)
_api.use('/form', _form)

export { _api }
