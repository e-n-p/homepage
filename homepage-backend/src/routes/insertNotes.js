import { db } from '../database'
import LogSys from '../logging';

const logger = new LogSys(__filename);

export const insertNotesRoute = {
    method: 'POST',
    path: '/api/notes',
    handler: async (req, h) => {
        const text = req.payload;
        logger.log("UPDATE notes SET page=" + text)
        await db.query(`
            UPDATE notes SET page=? WHERE id=1
        `, [text]
        );
        return {text}
    }
}