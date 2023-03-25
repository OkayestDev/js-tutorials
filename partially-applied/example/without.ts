import express, { Request, Response, NextFunction } from 'express';

const express = require('express');
const app = express();

const queryHasCat = (request: Request, response: Response, next: NextFunction) => {
    if (!request.query.cat) {
        return response.status(400).json({ message: 'Invalid request' });
    }
    return next();
};

const queryHasDog = (request: Request, response: Response, next: NextFunction) => {
    if (!request.query.dog) {
        return response.status(400).json({ message: 'Invalid request' });
    }
    return next();
};

app.get('/cat', queryHasCat, (_, response: Response) => {
    response.status(200).json({ message: 'meow' });
});

app.get('/dog', queryHasDog, (_, response: Response) => {
    response.status(200).json({ message: 'woof' });
});

app.listen(3000, () => {
    console.log('server started');
});
