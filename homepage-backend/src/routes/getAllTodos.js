import { fakeTodos } from './fake-data';
import { db } from '../database'


export const getAllTodosRoute = {
	method: 'Get',
	path: '/api/todos',
	handler: async (req, h) => {
		const { results } = await db.query(
			'SELECT * FROM todos'
		);
		return results;
	}
}