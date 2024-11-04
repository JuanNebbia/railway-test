import { Product } from "./src/models/Product.model.js"
import { sequelize } from "./src/conection/dbconection.js"
import express from "express"

const app = express()

app.get('/' , async (req, res) => {
    const data = await main()
    console.log(data)
    res.send(data)
    
})

const main = async() => {
    try {
        await sequelize.authenticate()
        console.error("Conexión exitosa a la base de datos")
        await Product.sync()
        const allProducts = await Product.findAll()
        const allProductsData = allProducts.map(product => product.dataValues)
        return allProductsData
    } catch (error) {
        console.error("Error de conexión", error)
    }
}

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
})