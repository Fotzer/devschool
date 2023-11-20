import postProduct  from "../Business logic layer/postProduct.js"

const productController = {};

productController.postProduct = async function (req, res) {
    const [data, error] = await postProduct(req.body);
    if(error) {
        res.status(error.status);
        res.send(error)
    }
    else {
        res.send(data);
    }
}

export default productController;