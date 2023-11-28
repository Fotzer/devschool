import { ApiProperty } from '@nestjs/swagger';
import {IsInt, IsNotEmpty, IsString} from "class-validator";
import {Type} from "class-transformer";

export class CreateEmployeeDto {
    @ApiProperty()
    @Type(() => Number)
    id?: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    firstName: string

    @ApiProperty()
    @IsString()
    middleName?: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    lastName:string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    position: string
}
