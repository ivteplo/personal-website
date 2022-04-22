// Copyright (c) 2022 Ivan Teplov

import { connectToDatabase, models } from 'database'

import apiHandler from '../../utilities/apiHandler'
import { MethodNotAllowed } from '../../utilities/apiErrors'

export default apiHandler(async (request, response) => {
  await connectToDatabase(process.env.MONGODB_URI)

  if (request.method !== 'POST') {
    throw new MethodNotAllowed('Only POST method is allowed.')
  }

  // Create a new model in the database
  const message = await models.Mail.create(request.body)

  response.status(201).json({
    success: true,
    data: message,
  })
})
