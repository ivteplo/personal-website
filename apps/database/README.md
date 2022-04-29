# Database for Personal Website

This is a package with all the database-related stuff.

## Usage

```javascript
import { connect, models } from 'database'

connect(process.env.MONGODB_URI)
  .then(() => {
    // Do something with database
  })
  .catch(console.error)
```

## Models

### `Mail`

Model for an email, sent via a form.

**Fields**:

- `sender: { name: String, email: String }` - information about a sender (name and email)
- `subject: String` - subject of a email
- `message: String` - body of the email
