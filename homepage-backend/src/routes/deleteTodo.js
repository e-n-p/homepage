import { db } from '../database';


export const deleteTodoRoute = {
	method: 'DELETE',
	path: '/api/todo/{id}',
	handler: async (req, h) => {
        const  id = req.params.id;
        await db.query(
            'DELETE FROM todos WHERE id=?',
            [id],
        );
        return "Success"
    }
}