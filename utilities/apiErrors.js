// Copyright (c) 2022 Ivan Teplov

export class APIError extends Error {
  name = 'APIError'
}

export class MethodNotAllowed extends Error {
  name = 'MethodNotAllowed'
}
