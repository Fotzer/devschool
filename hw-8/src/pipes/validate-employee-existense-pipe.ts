import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {NotFoundException} from "../exeptions/not-found.exception";
import {Employee, PrismaClient} from "@prisma/client";

@Injectable()
export class ValidateEmployeeExistensePipe implements PipeTransform {
    async transform(value: string, metadata: ArgumentMetadata) {
        const prisma: PrismaClient = new PrismaClient();
        const employee: Employee = await prisma.employee.findUnique({
            where: {id: Number(value)}
        });
        if(employee === null) {
            throw new NotFoundException("No such employee")
        }
        return value;
    }
}