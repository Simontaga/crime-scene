import IEvent from "../interfaces/IEvent";

export default class Event implements IEvent {

    id: number;
    datetime: Date;
    name: string;
    summary: string;
    url: string;
    type: string;
    locationName: string;
    locationGps: string;

    constructor(id: number, datetime: Date, name: string, summary: string, url: string, type: string, locationName: string, locationGps: string) {
        this.id = id;
        this.datetime = datetime;
        this.name = name;
        this.summary = summary;
        this.url = url;
        this.type = type;
        this.locationName = locationName;
        this.locationGps = locationGps;
    }
}