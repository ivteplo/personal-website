// Copyright (c) 2022 Ivan Teplov

import { APIError } from './apiErrors'

export default function apiHandler(callback) {
  return async function handler(request, response) {
    try {
      return await callback(request, response)
    } catch (error) {
      const data = {}

      if (error.name === 'ValidationError') {
        const firstError = Object.keys(error.errors)[0]
        data.message = error.errors[firstError].message
      } else if (error instanceof APIError) {
        data.message = error.message
      } else {
        data.message = 'Unknown error'
      }

      return response.status(400).send({
        success: false,
        data,
      })
    }
  }
}
