// Copyright (c) 2022 Ivan Teplov

function setProperty(object, key, value) {
  // If the key contains a dot
  if (key.indexOf('.') > 0) {
    const childKey = key.substring(0, key.indexOf('.'))

    if (!object[childKey]) {
      object[childKey] = {}
    }

    // Get the part after the dot
    key = key.substring(key.indexOf('.') + 1)

    setProperty(object[childKey], key, value)
  }
  // If the key is just a string without dots
  else {
    // Just set the value
    object[key] = value
  }
}

export default function formToJSON(form) {
  // Get all fields that have the 'name' attribute
  const fields = Array.from(form.querySelectorAll('[name]'))

  // The resulting object
  const data = {}

  for (const field of fields) {
    // Get the field's value or innerText if it's a textfield
    const fieldValue = field.value || field.innerText
    setProperty(data, field.name, fieldValue)
  }

  return data
}
