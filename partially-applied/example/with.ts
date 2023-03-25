import express, { Request, Response, NextFunction } from 'express';

const express = require('express');
const app = express();

const queryHas = (str: string) => (request: Request, response: Response, next: NextFunction) => {
    if (!request.query[str]) {
        return response.status(400).json({ message: 'Invalid request' });
    }
    return next();
};

app.get('/cat', queryHas('cat'), (_, response: Response) => {
    response.status(200).json({ message: 'meow' });
});

app.get('/dog', queryHas('dog'), (_, response: Response) => {
    response.status(200).json({ message: 'woof' });
});

app.listen(3000, () => {
    console.log('server started');
});
