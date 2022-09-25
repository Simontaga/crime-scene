import { PrismaClient } from '@prisma/client'
import GPSLocation from '../models/GPSLocation';

const prisma = new PrismaClient();

const getAllEventLocations = async(redisClient: any): Promise<GPSLocation[]> => {
    const cache = await redisClient.get('all_event_locations');
    if (cache !== null) return JSON.parse(cache);

    const result = await prisma.event.findMany({
        select: {
            locationGps: true,
        }
    });
    
    const data =  result.map((location) => new GPSLocation(location.locationGps));

    await redisClient.set('all_event_locations', JSON.stringify(data));
    
    return data;
}

export default getAllEventLocations;