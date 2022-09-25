import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const getCountAllEvents = async(redisClient: any): Promise<number> => {
    const cache = await redisClient.get('event_count');
    if (cache !== null) return JSON.parse(cache);

    const result = await prisma.event.count();

    await redisClient.set('event_count', JSON.stringify(result));
    return result;
}

export default getCountAllEvents;