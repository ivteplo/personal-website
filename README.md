# Personal Website

## Folder structure

- `assets` - different assets that don't have to be accessed publicly
- `components` - all the components of the website that can be reused
- `pages` - actual pages on the website
- `public` - files that have to be accessed publicly
- `styles` - all the stylesheets
- `utilities` - some helpful functions

## Environment variables

- `MONGODB_URI` - connection URI for MongoDB

## Development

### Requirements

1. Git
2. Node.js and npm
3. MongoDB

### Setup

1. Clone the repository

```bash
git clone https://github.com/ivteplo/personal-website
```

2. Navigate into the folder

```bash
cd personal-website
```

3. Install dependencies

```bash
npm install
# or, if you prefer yarn:
yarn install
```

4. Create file for environment variables

```bash
touch .env
```

5. Setup environment variables (in file `.env`)

```env
MONGODB_URI=mongodb+srv://user:password@host/database # replace `user`, `password`, `host`, and `database` with your own values
```

6. Start the development server for a website

```bash
cd apps/website

npm run dev
# or:
yarn dev
```

7. Happy hacking! 🎉
