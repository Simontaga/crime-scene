import { PrismaClient } from '@prisma/client'
import GPSLocation from '../models/GPSLocation';
import { RedisClientType } from '@redis/client/dist/lib/client';

const prisma = new PrismaClient();

const getAllEventLocations = async(redisClient: RedisClientType) => {
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