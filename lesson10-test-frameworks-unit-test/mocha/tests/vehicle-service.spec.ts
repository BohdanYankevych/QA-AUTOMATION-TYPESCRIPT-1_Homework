import { expect } from 'chai';
import { VehicleService } from '../HW/services/vehicle-service';
import { Bicycle } from '../HW/bicycle';
import { Car } from '../HW/car';
import { ElectricScooter } from '../HW/electric-scooter';

describe('VehicleService', () => {
    let consoleOutput: string[] = [];
    const originalConsoleLog = console.log;

    beforeEach(() => {
        consoleOutput = [];
        console.log = (output: string) => consoleOutput.push(output);
    });

    afterEach(() => {
        console.log = originalConsoleLog; // Відновлюємо console.log після кожного тесту
    });

    it('should call move() on Bicycle', () => {
        const bicycle = new Bicycle('BMX', 25);
        const service = new VehicleService(bicycle);

        service.makeItMove();

        expect(consoleOutput).to.include('The BMX pedals at 25 km/h.');
    });

    it('should call move() on Car', () => {
        const car = new Car('Toyota', 120);
        const service = new VehicleService(car);

        service.makeItMove();

        expect(consoleOutput).to.include('Toyota drives at 120 km/h.');
    });

    it('should call move() on ElectricScooter', () => {
        const scooter = new ElectricScooter('Xiaomi', 30);
        const service = new VehicleService(scooter);

        service.makeItMove();

        expect(consoleOutput).to.include('Xiaomi glides at 30 km/h.');
    });
});
