import express, { Request, Response, NextFunction } from 'express';

const express = require('express');
const app = express();

const queryHas = (str: string) => (request: Request, _, next: NextFunction) => {
    if (!request.query[str]) {
        return next(new Error('invalid request!'));
    }
    return next();
};

app.get('/cat', queryHas('cat'), (_, response) => {
    response.status(200).json({ message: 'meow' });
});

app.get('/dog', queryHas('dog'), (_, response) => {
    response.status(200).json({ message: 'woof' });
});

app.listen(3000, () => {
    console.log('server started');
});
