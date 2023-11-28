import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {UpdateEmployeeDto} from "./dto/update-employee.dto";
import {CreateProductDto} from "./dto/create-product-dto";
import {ValidateCustomerExistensePipe} from "./pipes/validate-customer-existense-pipe";
import {ValidateEmployeeExistensePipe} from "./pipes/validate-employee-existense-pipe";
import {ValidateOrderExistensePipe} from "./pipes/validate-order-existense-pipe";



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/customers/:customerId/orders")
  async getCustomerOrders(@Param("customerId", new ValidateCustomerExistensePipe()) customerId: string): Promise<object> {
    return await this.appService.getCustomerOrders(customerId);
  }

  @Patch("/employees/:employeeId")
  async patchEmployee(@Param("employeeId", new ValidateEmployeeExistensePipe()) employeeId: string, @Body() updateEmployeeDto : UpdateEmployeeDto): Promise<object> {
    return await this.appService.patchEmployee(employeeId, updateEmployeeDto);
  }

  @Delete("/orders/:orderId")
  async deleteOrder(@Param("orderId", new ValidateOrderExistensePipe()) orderId: string) : Promise<object> {
    return await this.appService.deleteOrder(orderId);
  }

  @Post("/products")
  async postProduct(@Body() createProductDto : CreateProductDto) : Promise<object> {
    return await this.appService.postProduct(createProductDto);
  }
}
