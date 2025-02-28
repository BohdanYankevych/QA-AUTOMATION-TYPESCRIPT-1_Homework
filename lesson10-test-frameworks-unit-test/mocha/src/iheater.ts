export interface IHeater {
    // thermalSensorIn: number;
    // thermalSensorOut: number;
    thermalRegulator: number;
    energySource: string;

    heatWater(): void;
    heatCustomWater(temperature: number): void;

}
