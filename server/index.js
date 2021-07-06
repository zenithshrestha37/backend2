const express = require ('express')
const cors = require ('cors')
const controller = require('./controllers/controller')
const app = express ()

app.use(express.json())
app.use(cors())

const port = 4004 

// //endpoints
app.get('/api/houses', controller.getHouses) 
app.delete("/api/houses/:id", controller.deleteHouse)
app.put("/api/houses/:id", controller.updateHouse)
app.post("/api/houses", controller.createHouse)

app.listen(port, () => {
    console.log (`Server running on port ${port}`) 
})











