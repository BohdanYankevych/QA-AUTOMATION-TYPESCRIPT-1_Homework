import { Vehicle } from './vehicle';
import { Fuelable } from 'HW/interfaces/fuelable';

export class Car extends Vehicle implements Fuelable {
    private fuelLevel: number;

    public constructor(name: string, speed: number, fuelLevel = 100) {
        super(name, speed);
        this.fuelLevel = fuelLevel;
    }

    public move(): string {
        return `${this.name} drives at ${this.speed} km/h.`;
    }

    public refuel(): string {
        this.fuelLevel = 100;
        return `${this.name} is refueled.`;
    }
}
