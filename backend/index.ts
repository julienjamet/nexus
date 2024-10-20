/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
/****************************************************/

/***************************************NEXUS ROUTER*/
import NexusRouter from './routes/router';
/****************************************************/

/**********************************************ENUMS*/
import { ansi } from './toolBox/enums/enums';
/****************************************************/
/************************************************************************/


/**************************************************************NEXUS APP*/
const app: Application = express();

/**********************SECURITY BASICS & JSON PARSER*/
app.use(cors());
app.use(helmet());
app.use(express.json());
/****************************************************/

/***************************************NEXUS ROUTER*/
NexusRouter(app);
/****************************************************/

/**********************REDIRECTION TO BUILD FRONTEND*/
const frontDirPath: string = path.resolve(__dirname, '../../frontend/build/');
const frontIndexPath: string = path.resolve(frontDirPath, 'index.html');

app.use(express.static(path.join(frontDirPath)));

app.get('/*', (req: Request, res: Response): void => {
    res.sendFile(frontIndexPath, (error: Error): void => {
        if (error) {
            res.status(500).send(error);
        }
    });
});
/****************************************************/

/******************************************LISTENING*/
app.listen(3000, (): void => console.log(`${ansi.green}Server launched on port [ ${ansi.yellow}${3000}${ansi.green} ] !`));
/****************************************************/
/************************************************************************/