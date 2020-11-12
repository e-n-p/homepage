import Boom from '@hapi/boom';
import { db } from '../database'

export const getTodoRoute = {
	method: 'GET',
	path: '/api/todo/{id}',
	handler: async (req, h) => {
		const id = req.params.id;
		const { results } = await db.query(
			'SELECT * FROM todos WHERE id=?',
			[id],
		);
		const todo = results[0];
		if(!todo) throw Boom.notFound(`Todo(${id}) doesn't exist`);
		return todo;	
	}
}