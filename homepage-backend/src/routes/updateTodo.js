import { db } from '../database';

export const updateTodoRoute = {

    method: 'POST',
    path: '/api/todo/{id}',
    handler: async (req, h) => {
        const id = req.params.id;
        const { name = '', description='', due=''} = req.payload;
        const formattedDate = due.slice(0,10);
        console.log("payload is (" + name + ") (" + description + ") (" + formattedDate+ ")");
        console.log("executing sql update");
        await db.query(`
            UPDATE todos
                SET name=?, description=?, due=?
                WHERE id=?
        `, [name, description, formattedDate, id]);
        console.log("finished executing sql update");
        console.log("executing sql select");
        const { results } = await db.query(
            'SELECT * FROM todos WHERE id=?',
            [id]);
        console.log("finished executing sql update");
        return results[0];
    }


}