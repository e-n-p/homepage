import { db } from '../database';


export const deleteTodoRoute = {
    method: 'DELETE',
    path: '/api/todo/{id}',
    handler: async (req, h) => {
        const  id = req.params.id;
        console.log("executing sql delete");
        await db.query(
            'DELETE FROM todos WHERE id=?',
            [id],
        );
        console.log("finished executing sql delete");
        return "Success"
    }
}