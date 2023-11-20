import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({});

async function deleteOrder(orderId){
    const order = await prisma.order.findUnique({
        where: {
            id: orderId
    }});

    if(order === null) {
        const error = {};
        error.status = 404;
        error.message = "No such order";
        return [null, error];
    }

    await prisma.orderProduct.deleteMany({
        where: {
            orderId: orderId
        }
    });

    const deletedOrder = await prisma.order.delete({
        where: {
            id: orderId
        }
    });

    return [deletedOrder, null]
}

export default deleteOrder;