import express from 'express'

const PORT = process.env.PORT || 8080

const app = express()

app.get('/', (req, res) => {
    res.send('Pong!')
})
app.get('/ping', (req, res) => {
    res.send('Pong!')
})
app.get("/:id", (req, res) => {
    const id = req.params.id
    res.send(`You requested ID: ${id}`)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})