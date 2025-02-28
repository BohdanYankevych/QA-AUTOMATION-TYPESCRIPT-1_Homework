import { expect } from 'chai';
import { Car } from '../HW/car';

describe('Car Class', () => {
    let car: Car;

    beforeEach(() => {
        car = new Car('Toyota', 120, 50);
    });

    it('should move correctly', () => {
        expect(car.move()).to.equal('Toyota drives at 120 km/h.');
    });

    it('should refuel correctly', () => {
        expect(car.refuel()).to.equal('Toyota is refueled.');
    });
});
