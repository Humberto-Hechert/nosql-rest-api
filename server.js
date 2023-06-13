import app from './src/app.js'
import { config } from 'dotenv'
config()

const port = process.env.PORT || 3080

app.listen(port, () => {
    console.log(`Servido rodando em http://localhost:${port}`)
})