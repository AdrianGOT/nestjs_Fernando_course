import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {

    private cars:Car[] = [
        {
            id: uuidv4(),
            brand: 'Toyota',
            model: 'Supra'
        },
        {
            id: uuidv4(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuidv4(),
            brand: 'Jeep',
            model: 'Cherokee'
        }
    ]

    findAll(){
        return this.cars;
    }

    findById(id: string){
        
        const carFound = this.cars.find(car => car.id === id);

        if(!carFound) throw new NotFoundException(`the car with id ${id} not found`); 
            
        return carFound;
    }

    createOne(){

    }

}
