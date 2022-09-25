import { PrismaClient } from '@prisma/client'
import IEvent from '../interfaces/IEvent';
const prisma = new PrismaClient();

const getAllEvents = async() => {
    const result = await prisma.event.findMany();
    return result;
}

export default getAllEvents;