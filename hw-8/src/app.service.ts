import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {Customer, Employee, Order, Prisma, Product} from '@prisma/client';
import {UpdateEmployeeDto} from "./dto/update-employee.dto";
import {CreateProductDto} from "./dto/create-product-dto";
import {ForbiddenException} from "./exeptions/forbidden.exception";
import {NotFoundException} from "./exeptions/not-found.exception";

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getCustomerOrders(customerId : string): Promise<object> {
    const customer = await this.prisma.customer.findUnique({
      where: {id: Number(customerId)}
    });
    if(customer === null) {
      throw new NotFoundException("No such customer")
    }

    const data : {totalCost?: number, orders? : Array<Order & { totalCost?: number }>} = {};
    data.orders = await this.prisma.order.findMany({
      where: {customerId: Number(customerId)}
    });

    let totalCost = 0;
    for(let record of data.orders) {
      const orderProducts = await this.prisma.orderProduct.findMany({
        where: {orderId: record.id}
      });


      let orderCost = 0;
      for(let orderProduct of orderProducts) {
        const product = await this.prisma.product.findUnique({
          where:{id: orderProduct.productId}
        });

        let price = orderProduct.productAmount * product.price;
        orderCost += price;
        totalCost += price;
      }


      record.totalCost = orderCost;
    }
    data.totalCost = totalCost;


    return {data:data};
  }

  async patchEmployee(employeeId : string, updateEmployeeDto : UpdateEmployeeDto){
    const employee : Employee = await this.prisma.employee.findUnique({
      where: {
        id: Number(employeeId)
      }});

    if(employee === null) {
      throw new NotFoundException("No such employee")
    }

    const employeeUpdate : Employee = await this.prisma.employee.update({
      where: {
        id: Number(employeeId)
      },
      data: {
        firstName: updateEmployeeDto.firstName,
        middleName: updateEmployeeDto.middleName,
        lastName: updateEmployeeDto.lastName,
        position: updateEmployeeDto.position
      }
    });
    return {data:employeeUpdate};
  }

  async deleteOrder(orderId : string) : Promise<object> {
    const order : Order = await this.prisma.order.findUnique({
      where: {
        id: Number(orderId)
      }});

    if(order === null) {
      throw new NotFoundException("No such order")
    }

    await this.prisma.orderProduct.deleteMany({
      where: {
        orderId: Number(orderId)
      }
    });

    const deletedOrder : Order = await this.prisma.order.delete({
      where: {
        id: Number(orderId)
      }
    });

    return {data:deletedOrder};
  }

  async postProduct(body : CreateProductDto) : Promise<object> {
    try {
      const product : Product = await this.prisma.product.create({
        data: {
          name: body.name,
          category: body.category,
          amount: Number(body.amount),
          price: Number(body.price)
        }});

      return {data:product};
    }
    catch(e: any) {
      throw new ForbiddenException(e.name)
    }
  }
}
