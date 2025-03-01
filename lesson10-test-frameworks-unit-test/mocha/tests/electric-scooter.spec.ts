import { expect } from 'chai';
import { ElectricScooter } from '../HW/electric-scooter';

describe('ElectricScooter Class', () => {
    let scooter: ElectricScooter;

    beforeEach(() => {
        scooter = new ElectricScooter('Xiaomi', 30, 50);
    });

    it('should move correctly', () => {
        expect(scooter.move()).to.equal('Xiaomi glides at 30 km/h.');
    });

    it('should charge correctly', () => {
        expect(scooter.charge()).to.equal('Xiaomi is fully charged.');
    });
});
