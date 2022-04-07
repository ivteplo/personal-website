// Copyright (c) 2022 Ivan Teplov

import connectToDatabase from '../../library/database'
import Mail from '../../models/Mail'

import apiHandler from '../../utilities/apiHandler'
import { MethodNotAllowed } from '../../utilities/apiErrors'

export default apiHandler(async (request, response) => {
  await connectToDatabase()

  if (request.method !== 'POST') {
    throw new MethodNotAllowed('Only POST method is allowed.')
  }

  // Create a new model in the database
  const message = await Mail.create(request.body)

  response.status(201).json({
    success: true,
    data: message,
  })
})
