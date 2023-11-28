import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {NotFoundException} from "../exeptions/not-found.exception";
import {Customer, PrismaClient} from "@prisma/client";

@Injectable()
export class ValidateCustomerExistensePipe implements PipeTransform {
    async transform(value: string, metadata: ArgumentMetadata) {
        const prisma: PrismaClient = new PrismaClient();
        const customer: Customer = await prisma.customer.findUnique({
            where: {id: Number(value)}
        });
        if(customer === null) {
            throw new NotFoundException("No such customer")
        }
        return value;
    }
}