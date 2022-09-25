interface IEvent {
    id: number;
    datetime: Date;
    name: string;
    summary: string;
    url: string;
    type: string;
    locationName: string;
    locationGps: string;

}

export default IEvent;