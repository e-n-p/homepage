import Hapi from '@hapi/hapi';
import routes from './routes';
import LogSys from './logging';
import inert from '@hapi/inert';
import { db } from './database';

let server;
const logger = new LogSys(__filename);

const start = async () => {
        server = Hapi.server({
        port: 80,
        host: '192.168.1.51',
    });
    
    await server.register(inert);

    routes.forEach(route => server.route(route));

    logger.log("Connecting to database ...");
    db.connect();
    logger.log("Connected to database");

    logger.log("starting server");
    await server.start();
    logger.log(`Server is listening on ${server.info.uri}`, true);
}

process.on('unhandledRejection', err => {
    console.log(Date());
    logger.log(err, true);
    process.exit(1);
});

process.on('uncaughtException', err => {
    console.log(Date());
    logger.log(err, true);
    logger.log(err.stack, true);
    process.exit(1);
});

process.on('SIGINT', async () => {
    logger.log('Stopping server...', true);
    server.stop({ timeout: 10000 });
    db.end();

    logger.log('server stopped', true);
    process.exit(0);

});

start();
