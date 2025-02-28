import { Vehicle } from './vehicle';

export class Bicycle extends Vehicle {
    public constructor(name: string, speed: number) {
        super(name, speed);
    }

    public move(): string {
        return `The ${this.name} pedals at ${this.speed} km/h.`;
    }
}
