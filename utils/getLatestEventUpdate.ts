import { PrismaClient } from "@prisma/client";
import redisConfig from "./redisConfig";
import Event from "../models/event";

const prisma = new PrismaClient();

const getLatestEventUpdate = async (redisClient: any): Promise<Event> => {
  const cache = await redisClient.get("latest_event");
  if (cache !== null) return JSON.parse(cache);

  const result = await prisma.event.findFirst({
    orderBy: {
      datetime: "desc",
    },
    take: 1,
  });

  await redisClient.set("latest_event", JSON.stringify(result), redisConfig);

  return result ?? new Event(1,new Date(),'','','','','','');
};

export default getLatestEventUpdate;
