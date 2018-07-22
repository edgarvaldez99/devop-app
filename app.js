const express = require('express')
const app = express()

const publicDir = `${__dirname}/public`

app.use(express.static(publicDir))

app.get('/', (req, res) => res.sendFile(`${publicDir}/index.html`))

app.get('/*', (req, res) => res.redirect('/'))

module.exports = app
