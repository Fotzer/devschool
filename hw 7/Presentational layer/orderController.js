import deleteOrder from "../Business logic layer/deleteOrder.js"

const orderController = {};

orderController.deleteOrder = async function (req, res) {
    const orderId = Number(req.params.orderId);
    const [data, error] = await deleteOrder(orderId);
    if(error) {
        res.status(error.status);
        res.send(error)
    }
    else {
        res.send(data);
    }
}

export default orderController;