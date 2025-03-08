import { AnotherClassExample } from './another-class-example';
import { ClassExample } from './class-example';

export class ClassExampleService {
    private _anotherClassExample: AnotherClassExample;

    public constructor(anotherClassExample: AnotherClassExample) {
        this._anotherClassExample = anotherClassExample;
    }

    public findYoungerThen(age: number): ClassExample[] {
        if (age <= 0){
            throw new Error('Age should be greater then 0');
        } else if (age > 100){
            throw new Error('Age should be less then 0');
        }
        const res = this._anotherClassExample.findYoungerThen(age).filter(person => person.age <= age);
        return res;
    }
    public findOlderThen(age: number): ClassExample[] {
        if (age <= 0){
            throw new Error('Age should be greater then 0');
        } else if (age > 100){
            throw new Error('Age should be less then 0');
        }
        return this._anotherClassExample.findOlderThen(age).filter(person => person.age > age);
    }
}
