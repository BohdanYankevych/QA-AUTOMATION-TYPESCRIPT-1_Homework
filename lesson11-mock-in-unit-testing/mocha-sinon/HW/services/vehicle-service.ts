import { Movable } from 'HW/interfaces/movable';

export class VehicleService {
    public constructor(private vehicle: Movable) {}

    public makeItMove(): void {
        console.log(this.vehicle.move());
    }
}
