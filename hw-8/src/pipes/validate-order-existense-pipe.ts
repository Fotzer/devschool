import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {NotFoundException} from "../exeptions/not-found.exception";
import { Order, PrismaClient} from "@prisma/client";

@Injectable()
export class ValidateOrderExistensePipe implements PipeTransform {
    async transform(value: string, metadata: ArgumentMetadata) {
        const prisma: PrismaClient = new PrismaClient();
        const order: Order = await prisma.order.findUnique({
            where: {id: Number(value)}
        });
        if(order === null) {
            throw new NotFoundException("No such order")
        }
        return value;
    }
}