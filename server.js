import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import logger from './core/logger/app-logger'
import morgan from 'morgan'
import config from './core/config/config.dev'
import cars from './routes/cars.route'
import connectToDb from './db/connect'

const app = express()
const port = process.env.PORT || 3000
var server  = require('http').createServer(app);


app.get('/', (req, res) => res.send('Hello World in express!'))

server.listen(port, () => console.log(`Example app listening on port ${port}!`))