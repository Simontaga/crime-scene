import IGPSLocation from "../interfaces/IGPSLocation";

export default class GPSLocation implements IGPSLocation {
    long: number;
    lat: number;
    gps: string;
    coordinates: string[];

    constructor(gps: string) {
        this.gps = gps;
        this.coordinates = this.gps.split(',');
        this.lat = parseFloat(this.coordinates[0]);
        this.long = parseFloat(this.coordinates[1]);
    }
}