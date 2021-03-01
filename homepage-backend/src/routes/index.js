import { getAllTodosRoute } from './getAllTodos';
import { getTodoRoute } from './getTodo';
import { createNewTodoRoute } from './createNewTodos';
import { getSwitchRoute } from './lampi/getOn';
import { getPresetsRoute } from './lampi/getPresets';
import { getOffRoute } from './lampi/getOff';
import { postOnBannerRoute } from './lampi/postOnBanner';
import { postOnPulseRoute } from './lampi/postOnPulse';
import { postOnSolidRoute } from './lampi/postOnSolid';
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