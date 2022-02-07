import { db } from '../database';
import LogSys from '../logging';

const logger = new LogSys(__filename);

export const updateTodoRoute = {

    method: 'POST',
    path: '/api/todo/{id}',
    handler: async (req, h) => {
        const id = req.params.id;
        const { name = '', description='', due=''} = req.payload;
        if (due != null){
            const formattedDate = due.slice(0,10);
            logger.log("UPDATE todos SET name=" + name + ", description=" + description + ", due='" + formattedDate + "' WHERE id=" + id);
            await db.query(`
                UPDATE todos
                    SET name=?, description=?, due=?
                    WHERE id=?
                `, [name, description, formattedDate, id]
            );
        }else{
            logger.log("UPDATE todos SET name=" + name + ", description=" + description + " WHERE id=" + id);
            await db.query(`
                UPDATE todos
                    SET name=?, description=?
                    WHERE id=?
                `, [name, description, id]
            );
        }
        console.log("SELECT * FROM todos WHERE id=" + id);
        const { results } = await db.query(
            'SELECT * FROM todos WHERE id=?',
            [id]);
        return results[0];
    }

}