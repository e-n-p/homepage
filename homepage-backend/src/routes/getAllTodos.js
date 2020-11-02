import { fakeTodos } from './fake-data';
import { db } from '../database'


export const getAllTodosRoute = {
	method: 'Get',
	path: '/api/todos',
	handler: async (req, h) => {
		
		const cli = db.getClient();
		const res = await cli.db(db).collection('todos').findOne();
		console.log(res);
		return res;
	}
}