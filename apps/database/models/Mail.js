// Copyright (c) 2022 Ivan Teplov

import mongoose from 'mongoose'
import tempMail from 'temp-mail-check'
import { isEmail } from 'validator'

const SenderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please specify your name.'],
  },
  email: {
    type: String,
    required: [true, 'Please specify an email.'],
    validate: [
      {
        validator: isEmail,
        msg: 'Please specify a valid email.',
      },
      {
        validator: tempMail.checkEmail,
        msg: 'Sorry, but you cannot use a temporary email for contacting me.',
      },
    ],
  },
})

const MailSchema = new mongoose.Schema(
  {
    sender: {
      type: SenderSchema,
    },
    subject: {
      type: String,
      required: [true, 'Please specify a subject of the message.'],
      validate: [
        (value) => value.length > 2,
        'The subject of the message is too short.',
      ],
    },
    message: {
      type: String,
      required: [true, 'Sorry, the message cannot be empty.'],
      validate: [
        (value) => value.length > 50,
        'The message has to be at least 50 characters long.',
      ],
    },
  },
  {
    timestamps: true,
  }
)

export const Mail = mongoose.models.Mail || mongoose.model('Mail', MailSchema)
export default Mail
