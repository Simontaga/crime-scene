import { PrismaClient } from '@prisma/client'
import GPSLocation from '../models/GPSLocation';
const prisma = new PrismaClient();

const getAllEventLocations = async() => {
    const result = await prisma.event.findMany({
        select: {
            locationGps: true,
        }
    });
    

    return result.map((location) => new GPSLocation(location.locationGps));
}

export default getAllEventLocations;