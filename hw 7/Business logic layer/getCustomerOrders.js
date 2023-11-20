import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({})

async function getCustomerOrders(customerId) {
    const data = {};
    data.orders = await prisma.order.findMany({
        where: {customerId: customerId}
    });

    let totalCost = 0;
    for(let record of data.orders) {
        const orderProducts = await prisma.orderProduct.findMany({
            where: {orderId: record.id}
        });


        let orderCost = 0;
        for(let orderProduct of orderProducts) {
            const product = await prisma.product.findUnique({
                where:{id: orderProduct.productId}
            });

            let price = orderProduct.productAmount * product.price;
            orderCost += price;
            totalCost += price;
        }


        record.totalСost = orderCost;
    }
    data.totalСost = totalCost;


    return data;
}

export default getCustomerOrders;