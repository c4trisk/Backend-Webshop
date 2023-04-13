const router = require('express').Router();
const { addOrder, getOrderById, getOrderByUser, addToExistingOrder, getOrders } = require('../models/orderModel');
const { verifyToken } = require('../authentication/auth')

// Create
router.post('/', verifyToken, addOrder)
router.post('/add/:id', verifyToken, addToExistingOrder)

// Read
router.get('/', getOrders)
router.get('/:id', getOrderById)
router.get('/user/:id', verifyToken, getOrderByUser)



module.exports = router;
