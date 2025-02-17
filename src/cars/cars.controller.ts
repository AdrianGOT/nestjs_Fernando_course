import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './DTO/Create-Car.dto';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsSertive: CarsService
    ){}

    
    @Get()
    public getAllCars(){
        return this.carsSertive.findAll();
    }

    @Get(':id')
    public getCarById( @Param('id', new ParseUUIDPipe({version: '4'}) ) id: string ){
        console.log(id);
        return this.carsSertive.findById(id) 
    }

    @Post()
    public create( @Body() createCarDto: CreateCarDto ){
        return this.carsSertive.createOne(createCarDto);
    }

    @Patch(':id')
    public update( @Body() body: any, @Param('id', ParseIntPipe) id: number ){
        return {
            body
        }
    }

    @Delete(':id')
    public delete(@Param('id') id: string ){
        return id;
    }
}
