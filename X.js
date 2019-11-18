const path = require('path')
const express = require('express')
const hbs = require('hbs')

const X = express()
const publicDirectoryPath = path.join(__dirname, '/public')
const partialsPath = path.join(__dirname, '../partials')
const viewsPath = path.join(__dirname, '../templates')

X.set('view engine', 'hbs')
X.set('views', viewsPath)
X.use(express.static(publicDirectoryPath))
hbs.registerPartials(partialsPath)

X.get('', (req, res) => {
    res.render('index')
})

X.get('/monsters', (req, res) => {
    res.send('Nasty Monsters!')
})


X.listen(3000, () => {
    console.log('Server is up on port 3000')
})