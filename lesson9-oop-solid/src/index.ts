import { Car } from './models/car';
import { Bicycle } from './models/bicycle';
import { ElectricScooter } from './models/electric-scooter';

const myCar = new Car('Toyota', 120);
console.log(myCar.move());
console.log(myCar.refuel());

const myBike = new Bicycle('Mountain Bike', 25);
console.log(myBike.move());

const myScooter = new ElectricScooter('Xiaomi Scooter', 30);
console.log(myScooter.move());
console.log(myScooter.charge());
