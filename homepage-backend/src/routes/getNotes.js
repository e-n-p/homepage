import { db } from '../database'
import LogSys from '../logging';

const logger = new LogSys(__filename);

export const getNotesRoute = {
    method: 'GET',
    path: '/api/notes',
    handler: async (req, h) => {
        const { results } = await db.query(
            'SELECT page FROM notes where id=1'
        );
        logger.log("passing to FE: " +  JSON.stringify(results[0]["page"]))
        return results;
    }
}