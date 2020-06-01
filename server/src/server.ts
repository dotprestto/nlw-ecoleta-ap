import express from 'express'

const app = express()

app.get('/users', (req, res) => {
    res.json('Listagem de Usuários')
})

app.listen(3333)