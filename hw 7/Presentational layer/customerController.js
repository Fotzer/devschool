import getCustomerOrders from "../Business logic layer/getCustomerOrders.js"

const customerController = {};

customerController.getCustomerOrders = async function (req, res) {
    const customerId = req.params.customerId;
    const [data, error] = await getCustomerOrders(Number(customerId));
    if(error) {
        console.log(error.status)
        res.status(error.status);
        res.send(error)
    }
    else {
        res.send(data);
    }
}

export default customerController;