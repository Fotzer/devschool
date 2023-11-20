import express from "express";
import customerController from "./Presentational layer/customerController.js";
import employeeController from "./Presentational layer/employeeController.js";
import orderController from "./Presentational layer/orderController.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/customers/:customerId/orders', customerController.getCustomerOrders);

app.patch('/employees/:employeeId', employeeController.patchEmployee);

app.delete('/orders/:orderId', orderController.deleteOrder);

app.listen(3000);