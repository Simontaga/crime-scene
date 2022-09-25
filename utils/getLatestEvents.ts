import { PrismaClient } from '@prisma/client'
import Event from '../models/event';
import redisConfig from './redisConfig';
const prisma = new PrismaClient();

const getLatestEvents= async(redisClient: any): Promise<Event[]> =>  {

    const cache = await redisClient.get('latest_events');
    if (cache !== null) return JSON.parse(cache);


    const result = await prisma.event.findMany({
        orderBy: [
            {
                eventID: 'desc',
            },
        ],
        take: 5,
    });

    await redisClient.set('latest_events', JSON.stringify(result), redisConfig);

    return result;
}

export default getLatestEvents;