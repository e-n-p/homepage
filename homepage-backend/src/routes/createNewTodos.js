import { db } from '../database';

export const createNewTodoRoute = {

	method: 'POST',
	path: '/api/newTodo',
	handler: async (req, h) => {
		const { name = '', description='', due=''} = req.payload;
		await db.query(`
			INSERT INTO todos (name, description, due)
			VALUES (?,?,?)
		`,
			[name, description, due]
		);
		return {name, description, due}
	}
}
