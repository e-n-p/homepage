import { getAllTodosRoute } from './getAllTodos';
import { getTodoRoute } from './getTodo';
import { createNewTodoRoute } from './createNewTodos';
import { updateTodoRoute } from './updateTodo';
import { deleteTodoRoute } from './deleteTodo';
import { updatePrioritiesRoute } from './updatePriorities';

import { getNotesRoute } from './getNotes';
import { insertNotesRoute } from './insertNotes';

import { noticeFeedRoute } from './fetchNoticeFeed.js';

import { getOnRoute } from './lampi/getOn';
import { getOffRoute } from './lampi/getOff';
import { postOnBannerRoute } from './lampi/postOnBanner';
import { postOnPulseRoute } from './lampi/postOnPulse';
import { postOnSolidRoute } from './lampi/postOnSolid';

import { getTracksRoute } from './lampi/getTracks';
import { getStatusWithArgsRoute } from './lampi/getStatusWithArgs';

import { staticFilesRoute, filesRoute } from './files';


export default[
    getAllTodosRoute,
    createNewTodoRoute,
    getTodoRoute,
    getOnRoute,
    getOffRoute,
    postOnSolidRoute,
    postOnPulseRoute,
    postOnBannerRoute,
    updateTodoRoute,
    deleteTodoRoute,
    staticFilesRoute,
    getTracksRoute,
    getStatusWithArgsRoute,
    getNotesRoute,
    insertNotesRoute,
    noticeFeedRoute,
    updatePrioritiesRoute,
    ...filesRoute,
];