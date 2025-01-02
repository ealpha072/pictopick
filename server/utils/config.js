
import dotenv from 'dotenv'
dotenv.config({path:'./.env'})

const PORT = process.env.PORT
const url = process.env.MONGODB_URI

export default {PORT, url}
