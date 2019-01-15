import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import logger from './core/logger/app-logger'
import morgan from 'morgan'
import config from './core/config/config.dev'
import cars from './routes/cars.route'
import connectToDb from './db/connect'
var http = require('http');

var port = process.env.PORT || 1337;
logger.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};

connectToDb();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev", { "stream": logger.stream }));

app.use('/cars', cars);

//Index route
app.get('/', (req, res) => {
    res.send('Invalid endpoint!');
});

var server = http.createServer(app);

server.listen(port, () => {
    logger.info('server started - ', port);
});