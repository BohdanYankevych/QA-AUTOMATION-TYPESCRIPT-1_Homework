import { expect } from 'chai';
import sinon from 'sinon';
import { VehicleService } from '../HW/services/vehicle-service';
import { Bicycle } from '../HW/bicycle';
import { Car } from '../HW/car';
import { ElectricScooter } from '../HW/electric-scooter';

describe('VehicleService (Mocha + Sinon)', () => {
    let bicycle: Bicycle;
    let car: Car;
    let scooter: ElectricScooter;

    beforeEach(() => {
        bicycle = new Bicycle('BMX', 25);
        car = new Car('Toyota', 120, 50);
        scooter = new ElectricScooter('Xiaomi', 30, 80);
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should call move() on Bicycle', () => {
        const moveSpy = sinon.spy(bicycle, 'move');
        const service = new VehicleService(bicycle);

        service.makeItMove();

        expect(moveSpy.calledOnce).to.be.true;
    });

    it('should call move() on Car', () => {
        const moveSpy = sinon.spy(car, 'move');
        const service = new VehicleService(car);

        service.makeItMove();

        expect(moveSpy.calledOnce).to.be.true;
    });

    it('should call move() on ElectricScooter', () => {
        const moveSpy = sinon.spy(scooter, 'move');
        const service = new VehicleService(scooter);

        service.makeItMove();

        expect(moveSpy.calledOnce).to.be.true;
    });

    it('should mock move() method for Bicycle', () => {
        const moveStub = sinon.stub(bicycle, 'move').returns('Mocked Bicycle Move');

        expect(bicycle.move()).to.equal('Mocked Bicycle Move');

        moveStub.restore();
    });

    it('should mock refuel() method for Car', () => {
        const refuelStub = sinon.stub(car, 'refuel').returns('Mocked Car Refuel');

        expect(car.refuel()).to.equal('Mocked Car Refuel');

        refuelStub.restore();
    });
});
