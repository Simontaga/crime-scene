import { createClient } from 'redis';

const createRedisManager = async() => {
    const client = createClient({
        url: process.env.REDIS_URL,
    });

    await client.connect();

    return client;
};

export default createRedisManager;


