import { PrismaClient } from '@prisma/client'
import IEvent from '../interfaces/IEvent';
import { RedisClientType } from '@redis/client/dist/lib/client';

const prisma = new PrismaClient();

const getAllEvents = async(redisClient: RedisClientType) => {
    const cache = await redisClient.get('all_events');
    if (cache !== null) return JSON.parse(cache);


    const result = await prisma.event.findMany();
    await redisClient.set('all_events', JSON.stringify(result));
    
    return result;
}

export default getAllEvents;