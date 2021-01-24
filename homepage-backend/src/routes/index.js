import { getAllTodosRoute } from './getAllTodos';
import { getTodoRoute } from './getTodo';
import { createNewTodoRoute } from './createNewTodos';
import { getSwitchRoute } from './getSwitch';
import { updateTodoRoute } from './updateTodo';
import { deleteTodoRoute } from './deleteTodo';
import { staticFilesRoute, filesRoute } from './files';


export default[
    getAllTodosRoute,
    createNewTodoRoute,
    getTodoRoute,
    getSwitchRoute,
    updateTodoRoute,
    deleteTodoRoute,
    staticFilesRoute,
    ...filesRoute,
];