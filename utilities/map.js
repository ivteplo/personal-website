// Copyright (c) 2022 Ivan Teplov

export default function map(object, callback) {
  return Object.keys(object).map((key) => {
    const value = object[key]
    return callback(value, key)
  })
}
