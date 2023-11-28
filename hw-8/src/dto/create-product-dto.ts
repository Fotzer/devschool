import { ApiProperty } from '@nestjs/swagger';
import {$Enums} from "@prisma/client";
import {IsEnum, IsInt, IsNotEmpty, IsString} from 'class-validator';
import {Type} from "class-transformer";


export class CreateProductDto {
    @ApiProperty()
    @Type(() => Number)
    id: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsEnum($Enums.ProductCategory)
    @IsString()
    @IsNotEmpty()
    category: $Enums.ProductCategory;

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    @Type(() => Number)
    amount: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    price: string;
}
