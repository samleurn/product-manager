import { Router } from 'express'

const _form = Router()

_form.get('/', (req, res, next) => {
  try {
    res.status(200).json({ message: 'Form route is working!' })
  } catch (error) {
    // error handling
  }
})

_form.post('/', (req, res, next) => {
  try {
    const formData = req.body
    res.status(201).json({ message: 'Form data received!', data: formData })
  } catch (error) {
    // error handling
  }
})

export { _form }
