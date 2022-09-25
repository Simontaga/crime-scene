import { PrismaClient } from '@prisma/client'
import IEvent from '../interfaces/IEvent';
const prisma = new PrismaClient();

const getLatestEvents = async() => {
    const result = await prisma.event.findMany({
        orderBy: [
            {
                eventID: 'desc',
            },
        ],
        take: 10,
    });

    return result;
}

export default getLatestEvents;