#!/usr/bin/node

import express from 'express';
import startServer from './libs/boot';
import injectRoutes from './routes';
import injectMiddlewares from './libs/middlewares';

injectMiddlewares(server);
injectRoutes(server);
startServer(server);

const express = require("express");
const router = require("./routes/index");

const server = express();
const PORT = process.env.PORT ? process.env.PORT : 5000;

server.use(express.json());
server.use(router);

server.listen(PORT, () =>
  console.log(`The server is running on port: ${PORT}`)
);
