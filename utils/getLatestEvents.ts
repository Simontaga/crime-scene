import { PrismaClient } from '@prisma/client'
import IEvent from '../interfaces/IEvent';
const prisma = new PrismaClient();
import { RedisClientType } from '@redis/client/dist/lib/client';

const getLatestEvents = async(redisClient: RedisClientType) => {

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