
import { AnotherClassExample } from 'src/another-class-example';
import { ClassExample } from '../src/class-example';
import sinon from 'ts-sinon';
import { ClassExampleService } from '../src/service-example';
import { expect } from 'chai';

describe('ClassExampleService tests', () => {
    const instance = sinon.createStubInstance(AnotherClassExample);
    const olderThen30: ClassExample[] = [
        {
            name: 'John',
            age: 30
        },
        {
            name: 'Jane',
            age: 31
        }
    ] as ClassExample[];

    instance.findOlderThen.returns(olderThen30);

    const service = new ClassExampleService(instance);

    describe('findOlderThen return data', () => {
        it('findOlderThen should return data', () => {
            const result = service.findOlderThen(30);

            expect(result).to.be.equal(olderThen30);
            expect(instance.findOlderThen.calledOnceWith(30)).to.be.true;
            expect(instance.findOlderThen.calledTwice).to.be.false;

        });
    });
    describe('findOlderThen with ege 0 throws exceptions', () => {
        it('findOlderThen with ege 0 throws exceptions', () => {
            expect(() => service.findOlderThen(0)).to.throw('Age should be greater then 0');
            expect(instance.findOlderThen.calledOnceWith(0)).to.be.true;
        });
    });
});
