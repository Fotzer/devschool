import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({});

async function patchEmployee(employeeId, body){
    const employee = await prisma.employee.findUnique({
    where: {
        id: employeeId
    }});

    if(employee === null) {
        const error = {};
        error.status = 404;
        error.message = "No such employee";
        return [null, error];
    }

    const employeeUpdate = await prisma.employee.update({
        where: {
            id: employeeId
        },
        data: {
            firstName: body.firstName,
            middleName: body.middleName,
            lastName: body.lastName,
            position: body.position
        }
    });
    return [employeeUpdate, null]
}

export default patchEmployee;