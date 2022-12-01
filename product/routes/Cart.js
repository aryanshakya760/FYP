const router = require('express').Router()
const { Cart,Product,Users } = require('../models');
const {validateToken} = require('../middlewares/AuthMiddleware')

router.post('/', validateToken ,async (req,res,next)=>{
    try {
        const {productId, quantity} = req.body;
        const cartData = {
            UserId: req.user.id,
            ProductId: productId,
            quantity: quantity
        }
        const cart = await Cart.create(cartData)
        
        return res.json({message:"Item added to cart"})
    } catch (error) {
        next(error)
    }
})

router.get('/', validateToken ,async (req,res,next)=>{
    try {
        const {productId, quantity} = req.body;
        const cart = await Cart.findAll({
            where:{
                userId: req.user.id
            },
            include: [
                {
                    all: true
                }
            ]
        })
        return res.json({data: cart})
    } catch (error) {
        next(error)
    }
})

router.post('/order', validateToken ,async (req,res,next)=>{
    try {
       
        const cart = await Cart.findAll({
            where:{
                userId: req.user.id
            },
            include: [
                {
                    all: true
                }
            ]
        })
        
        const orders = cart.map(c=>{
            return {
                productId: c.productId,
                
            }
        })
        return res.json({message:"Item added to cart"})
    } catch (error) {
        next(error)
    }
})


module.exports = router;