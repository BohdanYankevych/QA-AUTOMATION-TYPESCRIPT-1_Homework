import { expect } from 'chai';
import { Bicycle } from '../HW/bicycle';

describe('Bicycle Class', () => {
    let bicycle: Bicycle;

    beforeEach(() => {
        bicycle = new Bicycle('BMX', 25);
    });

    it('should move correctly', () => {
        expect(bicycle.move()).to.equal('The BMX pedals at 25 km/h.');
    });
});
