import { PrismaClient, $Enums } from '@prisma/client'

const prisma = new PrismaClient({});

async function postProduct(body){
    if($Enums.ProductCategory[body.category] !== body.category) {
        const error = {};
        error.status = 403;
        error.message = "Invalid product category";
        return [null, error];
    }

    const product = await prisma.product.create({
        data: {
            name: body.name,
            category: body.category,
            amount: Number(body.amount),
            price: Number(body.price)
        }});

    return [product, null];
}

export default postProduct;