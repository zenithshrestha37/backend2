const houses = require("../db.json")

let houseId = 4

module.exports = {
    getHouses: (req,res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req,res) => {
        console.log(req.params)
        
        const index = houses.findIndex(house =>{
            return house.id === +req.params.id

        
        })

        if (index === -1) {
            res.status(400).send({error: 'id was not found'})
        } else {
            houses.splice(index, 1)
            res.status(200).send(houses)
        }
    },
    createHouse: (req,res) => {
        const {address, price, imageURL} = req.body
        const newHouse = {
            id: houseId,
            address,
            price,
            imageURL
    }

    houses.push(newHouse)
    res.status(200).send(houses)
    houseId++

    },
    updateHouse: (req,res) => {
        const { id } = req.params
        const { type, price } = req.body

        const index = houses.findIndex(house =>{
            return house.id === +req.params.id
        })

        if (houses[index].price <=10000 && type === 'minus') {
            houses[index].price = 0
            res.status(200).send(houses)
        } else if (type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === 'minus'){
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else {
            res.status(400).send({error: "error updating"})
            
        }
    
    



    }



}