import express from "express";
import customerController from "./Presentational layer/customerController.js"

const app = express();


app.get('/customers/:customerId/orders', customerController.getCustomerOrders);

app.listen(3000);