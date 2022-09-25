import { PrismaClient } from '@prisma/client'
import Event from '../models/event';
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

    await redisClient.set('lastest_events', JSON.stringify(result));

    return result;
}

export default getLatestEvents;