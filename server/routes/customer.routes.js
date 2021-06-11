//customer.routes.js

import express from "express";
import { postCustomer, customerForm } from '../controller/customer.controller.js';

const router = express.Router();

router.get('/customer', customerForm);

router.post('/customer', postCustomer);

export default router ;