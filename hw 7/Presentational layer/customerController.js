import getCustomerOrders from "../Business logic layer/getCustomerOrders.js"

const customerController = {};

customerController.getCustomerOrdersController = async function (req, res) {
    const customerId = req.params.customerId;
    const data = await getCustomerOrders(Number(customerId));
    res.send(data);
}

export default customerController;