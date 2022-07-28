/** source/server.ts */
import express from 'express';
import config from 'config'
import log from "./logger";
import connect from './db/connect';
import routes from './routes';

const app = express();

/** Parse the request */
app.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
app.use(express.json());


const port =  config.get('port') as number;
const host = config.get('host') as string;
app.listen(port,host, () => {
    log.info(`The server is running at http://${host}:${port}`)
    connect();
    routes(app)
});