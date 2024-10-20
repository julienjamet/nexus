/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import mongoose, { Model, Schema } from 'mongoose';
/****************************************************/

/****************************************CONNECTIONS*/
import { kanapConnexion } from '../../connections/kanap';
/****************************************************/

/*****************************************INTERFACES*/
import { IKanapSofa } from '../../../toolBox/interfaces/interfaces';
/****************************************************/
/************************************************************************/


/******************************************************KANAP SOFAS MODEL*/
/*********************************************SCHEMA*/
const sofa: Object = {
    name: { type: String, unique: true, required: true },
    price: { type: Number, required: true },
    colors: { type: [String], required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true }
};

const sofaSchema: Schema<IKanapSofa> = new mongoose.Schema(sofa);
/****************************************************/

/**********************************************MODEL*/
export const Sofas: Model<IKanapSofa> = kanapConnexion.model('Sofas', sofaSchema);
/****************************************************/
/************************************************************************/