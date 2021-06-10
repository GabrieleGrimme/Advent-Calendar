//product.routes.js

import express from "express";
import { 
    postProduct,
    getProduct,
    getProducts
} from '../controller/products.controller.js';


const router = express.Router();

router.get('/products/:productId', getProduct);
router.get('/products', getProducts);
router.post('/products', postProduct);

export default router ;