import express from 'express'
const app = express()
import mongoose  from 'mongoose';
import { routes } from './routes/restaurant.routes.js';
import { userRoutes } from './routes/user.routes.js';
import { seedDB } from './seed.js';
import cors from "cors"
mongoose.connect('mongodb+srv://samarthvohraindia:TfxswqjyttlgZ9YS@cluster0.nptldxg.mongodb.net/')
.then(function(){console.log("DB CONNECTED SUCCESSFULLY")})
.catch(function(ERR){console.log(ERR , "ERROR")})

app.use(cors())
// middleware
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

routes(app);
userRoutes(app);
// seedDB()

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})