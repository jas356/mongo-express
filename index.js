import express from "express"
import cors from "cors"
import { getAllPlants, addPlant } from "./src/plants.js"

const PORT = 3001

const app = express()

app.use(cors())
app.use(express.json())

//API points / routes will go here...
app.get("/plants", getAllPlants)
app.post("/plants", addPlant)


app.listen(PORT, ()=> {
    console.log(`Listening on http://localhost:${PORT}...`)
})
