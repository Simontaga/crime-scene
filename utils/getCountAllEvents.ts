import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const getCountAllEvents = async() => {
    const result = await prisma.event.count();
    return result;
}

export default getCountAllEvents;