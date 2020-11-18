import Queue from 'bull';

import redisConfig from '../../config/redis';

import * as jobs from '../jobs'

const queues = object.values(jobs).map(job => ({
    bull: new Queue(job.key, redisConfig),
    name: job.key,
    handle: job.handle,
    options: job.options,
}))

export default{
    queues,
    add(name, data){
        const queue = this.queues.find(queue => queue. name == name);

        return queue.bull.add(data, queue.options);
    }
}