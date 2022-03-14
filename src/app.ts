import express from 'express';
import 'reflect-metadata';
import './database';

const app = express();

app.use(
    express.json(),
    express.urlencoded({
        extended: true,
    })
);

export { app };
