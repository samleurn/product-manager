import { Router } from 'express'

const _home = Router()

_home.get('/', (req, res) => {
  try {
    res.status(200).json({ message: 'API is running' })
  } catch (error) {
    // error
  }
})

export { _home }
