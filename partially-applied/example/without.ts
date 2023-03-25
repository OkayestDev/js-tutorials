import express, { Request, Response, NextFunction } from 'express';

const express = require('express');
const app = express();

const queryHasCat = (request: Request, _, next: NextFunction) => {
    if (!request.query.cat) {
        return next(new Error('invalid request!'));
    }
    return next();
};

const queryHasDog = (request: Request, _, next: NextFunction) => {
    if (!request.query.dog) {
        return next(new Error('invalid request!'));
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
