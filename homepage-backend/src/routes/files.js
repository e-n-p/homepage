const angularRoutePaths = [
    '/',
    '/homepage',
    '/todo',
    '/todo-edit/:id',
    '/todo-new',
];

export const filesRoute = angularRoutePaths.map(path => ({
    method: 'GET',
    path,
    handler: (req, h) => {
        return h.file('dist/homepage/index.html');
    }
})

)

export const staticFilesRoute = {
    method: 'GET',
    path: '/{params*}',
    handler: {
        directory: {
            path: 'dist/homepage',
        }
    }
}