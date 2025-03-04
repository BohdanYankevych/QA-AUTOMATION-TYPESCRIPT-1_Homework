import { ClassExampleService } from 'src/service-example';
import { AnotherClassExample } from '../src/another-class-example';
import { beforeEach, describe, expect, Mocked,  test, vi } from 'vitest';
import { ClassExample } from '../src/class-example';

describe('ClassExampleService Unit Tests', () => {
    let instance: Mocked<AnotherClassExample>;
    let service: ClassExampleService;

    const expectedResult = [
        {
            name: 'John',
            age: 20
        },
        {
            name: 'Jane',
            age:25
        }
    ] as ClassExample[];

    beforeEach(() => {
        instance = {
            findOlderThen: vi.fn(),
            findYoungerThen: vi.fn()
        } as unknown as Mocked<AnotherClassExample>;

        service = new ClassExampleService(instance);
    });

    describe('findYoungerThen return data', () => {
        test('with age 30 data should be as expected', () => {
            instance.findYoungerThen.mockReturnValue(expectedResult);

            const result = service.findYoungerThen(30);
            expect(result).toEqual(expectedResult);
            expect(instance.findYoungerThen).toHaveBeenCalledWith(30);
            expect(instance.findYoungerThen).toHaveBeenCalledTimes(1);
        });
    });

    describe('findYoungerThen return throws error age is less then 0', () => {
        test('age is 0', () => {
            instance.findYoungerThen.mockReturnValue(expectedResult);

            //const result = service.findYoungerThen(0);
            expect(() => service.findYoungerThen(0)).toThrowError();
            // expect(instance.findYoungerThen).toHaveBeenCalledWith(30);
            // expect(instance.findYoungerThen).toHaveBeenCalledTimes(1);
        });
    });
});
