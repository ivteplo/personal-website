// Copyright (c) 2022 Ivan Teplov

import { useState } from 'react'
import Head from 'next/head'

import Alert from '../components/base/Alert'
import Spinner from '../components/base/Spinner'
import Header from '../components/layout/Header'
import PageSection from '../components/layout/PageSection'

import styles from '../styles/pages/Contact.module.css'
import formToJSON from '../utilities/formToJSON'

export default function Contact() {
  const [response, setResponse] = useState(null)
  const [isAlertShown, setIsAlertShown] = useState(false)

  const hideAlert = () => {
    setIsAlertShown(false)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const data = formToJSON(form)

    setResponse(null)
    setIsAlertShown(true)

    fetch(form.action, {
      method: form.method.toUpperCase(),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        setResponse(json)
        setIsAlertShown(true)

        if (json.success) {
          // Reset form fields
          form.querySelectorAll('[name]').forEach((field) => {
            if (field.innerText) {
              field.innerText = ''
            }

            if (field.value) {
              field.value = ''
            }
          })
        }
      })
      .catch((error) => {
        console.error(error)

        setResponse({
          success: false,
          data: {
            message: 'Something went wrong',
          },
        })

        setIsAlertShown(true)
      })
  }

  return (
    <>
      <Head>
        <title>Contact | Ivan Teplov</title>
      </Head>
      <Header mini>
        <h1>Contact</h1>
      </Header>
      <PageSection title="Mail">
        <form
          className={styles.form}
          method="post"
          action="/api/contact"
          onSubmit={onFormSubmit}
        >
          <Alert
            visible={isAlertShown}
            onHide={hideAlert}
            title={
              response?.success
                ? 'Success'
                : response
                ? 'Error'
                : ''
            }
            actions={
              response && (
                <>
                  <button type="button" className="primary" onClick={hideAlert}>
                    OK
                  </button>
                </>
              )
            }
          >
            {response?.success ? (
              <p className={styles.successMessage}>
                The mail has been sent successfully
              </p>
            ) : response ? (
              <p className={styles.errorMessage}>
                {response?.data.message || 'Something went wrong'}
              </p>
            ) : (
              <Spinner />
            )}
          </Alert>
          <div>
            <label htmlFor="inputField">Name</label>
            <input
              type="text"
              name="sender.name"
              id="inputField"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label htmlFor="emailField">Email</label>
            <input
              type="email"
              name="sender.email"
              id="emailField"
              placeholder="Your email address"
              required
            />
          </div>

          <div>
            <label htmlFor="subjectField">Subject</label>
            <input
              type="text"
              name="subject"
              id="subjectField"
              placeholder="Subject"
              required
            />
          </div>

          <div>
            <label htmlFor="messageField">Message</label>
            <textarea
              name="message"
              placeholder="Message"
              id="messageField"
              required
            />
          </div>

          <button type="submit" className="primary">
            Send
          </button>
        </form>
      </PageSection>
    </>
  )
}
