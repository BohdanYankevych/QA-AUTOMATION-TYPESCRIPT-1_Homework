import { Vehicle } from './vehicle';
import { Chargeable } from '../interfaces/chargeable';

export class ElectricScooter extends Vehicle implements Chargeable {
    private batteryLevel: number;

    public constructor(name: string, speed: number, batteryLevel = 100) {
        super(name, speed);
        this.batteryLevel = batteryLevel;
    }

    public move(): string {
        return `${this.name} glides at ${this.speed} km/h.`;
    }

    public charge(): string {
        this.batteryLevel = 100;
        return `${this.name} is fully charged.`;
    }
}
