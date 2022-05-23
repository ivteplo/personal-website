// Copyright (c) 2022 Ivan Teplov

import mongoose from 'mongoose'

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { connection: null, promise: null }
}

export async function connectToDatabase(uri) {
  if (cached.connection) {
    return cached.connection
  }

  if (!cached.promise) {
    const options = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(uri, options).then((mongoose) => {
      return mongoose
    })
  }

  cached.connection = await cached.promise
  return cached.connection
}

export default connectToDatabase
