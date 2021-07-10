import { getAllTodosRoute } from './getAllTodos';
import { getTodoRoute } from './getTodo';
import { createNewTodoRoute } from './createNewTodos';
import { updateTodoRoute } from './updateTodo';
import { deleteTodoRoute } from './deleteTodo';
import { getOnRoute } from './lampi/getOn';
import { getOffRoute } from './lampi/getOff';
import { getPresetsRoute } from './lampi/getPresets';
import { postOnBannerRoute } from './lampi/postOnBanner';
import { postOnPulseRoute } from './lampi/postOnPulse';
import { postOnSolidRoute } from './lampi/postOnSolid';
import { getTracksRoute } from './tracks/getTracks';

import { staticFilesRoute, filesRoute } from './files';


export default[
    getAllTodosRoute,
    createNewTodoRoute,
    getTodoRoute,
    getOnRoute,
    getOffRoute,
    getPresetsRoute,
    postOnSolidRoute,
    postOnPulseRoute,
    postOnBannerRoute,
    updateTodoRoute,
    deleteTodoRoute,
    staticFilesRoute,
    getTracksRoute,
    ...filesRoute,
];