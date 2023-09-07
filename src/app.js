import express from 'express'
import playerRoutes from './routes/playerRoutes.js'
import avatarRoutes from './routes/avatarRoutes.js'

const app = express()

app.use(express.json())

app.use(playerRoutes)
app.use(avatarRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app