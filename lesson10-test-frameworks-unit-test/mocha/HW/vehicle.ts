import { Movable } from '../interfaces/movable';

export abstract class Vehicle implements Movable {
    protected constructor(protected name: string, protected speed: number) {}

    public move(): string {
        return `${this.name} moves at ${this.speed} km/h.`;
    }
}
