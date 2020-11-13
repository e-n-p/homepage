import { db } from '../database';

export const createNewTodoRoute = {

    method: 'POST',
    path: '/api/newTodo',
    handler: async (req, h) => {
        const { name = '', description='', due=''} = req.payload;
        console.log("executing sql insert");
        console.log("payload is (" + name + ") (" + description + ") (" + due+ ")");
        await db.query(`
            INSERT INTO todos (name, description, due)
            VALUES (?,?,?)
        `,
            [name, description, due]
        );
        console.log("finished executing sql insert");
        return {name, description, due}
    }
}
