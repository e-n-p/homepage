import { db } from '../database';
import LogSys from '../logging';

const logger = new LogSys(__filename);

export const createNewTodoRoute = {
    method: 'POST',
    path: '/api/newTodo',
    handler: async (req, h) => {
        const { name = '', description='', due=''} = req.payload;
        logger.log("INSERT INTO todos (" + name + ", " + description + ", " + due+ ")");
        await db.query(`
            INSERT INTO todos (name, description, due)
            VALUES (?,?,?)
        `,
            [name, description, due]
        );
        return {name, description, due}
    }
}
