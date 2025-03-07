import { db } from '../database';
import LogSys from '../logging';

const logger = new LogSys(__filename)

export const updatePrioritiesRoute = {

    method: 'PATCH',
    path: '/api/updatePriorities',
    handler: async (req,h) => {
        const updates = req.payload;
        if (!Array.isArray(updates) || updates.length === 0) {
            return h.response({ message: 'Invalid input'}).code(400);
        }

        const updatePromise = updates.map(({ id, priority }) => db.query(`
            UPDATE todos
            SET priority=? WHERE id=?
        `, [priority, id]
        ));
        await Promise.all(updatePromise);
        return h.response({ message: 'Priorities updated successfully'}).code(200);
    }
}
