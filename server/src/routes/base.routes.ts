import * as express from 'express';

export class BaseRoute {
    public path: string = '/api';
    public router = express.Router();
}
