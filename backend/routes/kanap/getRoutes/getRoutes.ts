/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { Application, Request, Response } from 'express';
/****************************************************/

/************************************MONGOOSE MODELS*/
import { Sofas } from '../../../dbManager/models/kanap/sofas';
/****************************************************/

/*****************************************INTERFACES*/
import { IKanapSofa } from '../../../toolBox/interfaces/interfaces';
/****************************************************/
/************************************************************************/


/*************************************************************GET ROUTES*/
export default (app: Application): void => {
    // GET ALL SOFAS (c-[R]-u-d)
    app.get('/kanap/get/sofas', (req: Request, res: Response): void => {
        Sofas.find()

            .then((sofas: IKanapSofa[]): Response => res.status(200).send(sofas))

            .catch((error: Error): Response => res.status(500).send(error));
    });


    // GET ONE SOFA (c-[R]-u-d)
    app.get('/kanap/get/sofas/:id', (req: Request, res: Response): void => {
        const id: string = req.params.id;

        Sofas.findById(id)

            .then((sofa: IKanapSofa): Response => res.status(200).send(sofa))

            .catch((error: Error): Response => res.status(500).send(error));
    });
};
/************************************************************************/