import { expect as expectChai } from 'chai';
import {beforeAll, describe, beforeEach, expect, test } from '@jest/globals';

describe('Mocha first test suite', () => {
    let sum: number;
    beforeAll(() => {
        sum = 5;
    });

    beforeEach(() => {
        sum = 6;

    });
    describe('Mocha first test', () => {
        it('2 + 2 = 4', () => {
            expect(2 + 2).toBe(4);
        });
    });

    describe('Mocha second test, 2 + 2 != 5', () => {
        test('1. put result of 2 + 2 into variable', () => {
            sum = 2 + 2;
        });

        test('2. check variable to be 5', () => {
            expectChai(sum).to.be.equal(5);
        });

        test('3. final test case', () => {
            console.log('3rd step');
        });
    });
});
