import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"

import userRoutes from "./routes"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(userRoutes)

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@jim-app.ujtjl.mongodb.net/main?authSource=admin&replicaSet=atlas-ehvnq7-shard-0&readPreference=primary&appname=mongodb-vscode%200.5.0&ssl=true`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })