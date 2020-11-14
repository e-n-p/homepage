import Hapi from '@hapi/hapi';
import routes from './routes';
import { db } from './database';

let server;

const start = async () => {
        server = Hapi.server({
        port: 80,
        host: '192.168.1.51',
    });
    

    console.log("Connecting to database ...")
    
    routes.forEach(route => server.route(route));

    db.connect();

    await server.start();
    console.log("Connected Successfully!");
    console.log(`Server is listening on ${server.info.uri}`)
}

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
});

process.on('SIGINT', async () => {
    console.log('Stopping server...');
    
    server.stop({ timeout: 10000 });
    
    db.end();
    console.log('server stopped');
    process.exit(0);
});

start();
