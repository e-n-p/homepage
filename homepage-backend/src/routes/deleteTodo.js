import { db } from '../database';
import LogSys from '../logging';

const logger = new LogSys(__filename);

export const deleteTodoRoute = {
    method: 'DELETE',
    path: '/api/todo/{id}',
    handler: async (req, h) => {
        const  id = req.params.id;
        logger.log("DELETE FROM todos WHERE id=" + id);
        await db.query(
            'DELETE FROM todos WHERE id=?',
            [id],
        );
        return "Success"
    }
}