import watchesModel from "../../models/watchesModel.js"
import asyncHandler from "express-async-handler"



const getCardInfo = (app) => {
    app.get('/store/:_id', asyncHandler(async (req, res) => {
        const params = req.params
        const product = await watchesModel.findById(params)
        if(product) {
            res.json(product)

        } else {
            res.status(404)
            throw new Error("Product not found")
        }
    }) )
}


export default getCardInfo