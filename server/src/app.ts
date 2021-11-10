import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

export class App {
    public port : number = 5005;
    public app: any;

    constructor(controllers: any){
        this.app = express(); 
        this.initilizeMiddlewares()
        this.initializeControllers(controllers);
        
    }
    private initilizeMiddlewares() {
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
    }
    private initializeControllers(controllers: any) {
        for (const controller of controllers) {
            this.app.use('/', controller.router);
        }
    }
    public  listen() {
       this.app.listen(this.port, () => {
            console.log('App listening on port ' + this.port);
        });
    }
}