import { expect } from 'chai';
import { Vehicle } from '../HW/vehicle';

class TestVehicle extends Vehicle {
    public constructor(name: string, speed: number) {
        super(name, speed);
    }

    public move(): string {
        return `${this.name} moves at ${this.speed} km/h.`;
    }
}

describe('Vehicle Abstract Class', () => {
    let vehicle: TestVehicle;

    beforeEach(() => {
        vehicle = new TestVehicle('Generic', 60);
    });

    it('should move correctly', () => {
        expect(vehicle.move()).to.equal('Generic moves at 60 km/h.');
    });
});
