import { PrismaClient } from '@prisma/client'
import Event from '../models/event';

const prisma = new PrismaClient();

const getAllEvents = async(redisClient: any): Promise<Event[]> => {
    const cache = await redisClient.get('all_events');
    if (cache !== null) return JSON.parse(cache);


    const result = await prisma.event.findMany();
    await redisClient.set('all_events', JSON.stringify(result));
    
    return result;
}

export default getAllEvents;