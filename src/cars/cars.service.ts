import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './DTO/Create-Car.dto';

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

    createOne(newCar: CreateCarDto){
        const carInDB = this.cars.find( car => car.brand === newCar.brand && car.model === newCar.model );
        
        if(carInDB){
            throw new BadRequestException("There is already a car with that information in the database");
        }

        const newCarToSave: Car = {
            id: uuidv4(),
            brand: newCar.brand,
            model: newCar.model
        }

        this.cars.push(newCarToSave);
        return newCarToSave; 
    }

}
