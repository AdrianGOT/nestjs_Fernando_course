import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

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
    public getCarById( @Param('id') id: string ){
        console.log(id);
        return this.carsSertive.findById(id) 
    }

    @Post()
    public create( @Body() body: any ){
        return {
            body
        }
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
