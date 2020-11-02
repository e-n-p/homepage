import Boom from '@hapi/boom';
import { fakeTodos } from './fake-data';

export const getTodoRoute = {
	method: 'GET',
	path: '/api/todos/{id}',
	handler: (req, h) => {
		const id = req.params.id;
		const todo = fakeTodos.find(todo => todo.id === id);
		if(!todo) throw Boom.notFound(`Todo(${id}) doesn't exist`);
		return todo;	
	}
}