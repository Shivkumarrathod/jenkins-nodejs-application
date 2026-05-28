import express from 'express'

const PORT = process.env.PORT || 8080

const app = express()

app.get('/ping', (req, res) => {
    res.send('Pong!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})