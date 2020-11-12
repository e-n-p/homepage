import { db } from '../database';

export const updateTodoRoute = {

    method: 'POST',
    path: '/api/todo/{id}',
    handler: async (req, h) => {
        const { id } = req.params.id;
		const { name = '', description='', due=''} = req.payload;
        await db.query(`
            UPDATE todos
                SET name=?, description=?, due=?
                WHERE id=?
        `, [name, description, due, id]);
        const { results } = await db.query(
            'SELECT * FROM todos WHERE id=?'
        );
        return results[0];
    }


}