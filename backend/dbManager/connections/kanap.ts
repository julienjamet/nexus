/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import dotenv from 'dotenv';
import mongoose from 'mongoose';
/****************************************************/

/********************************************METHODS*/
import { connectToDatabase } from '../../toolBox/methods/methods';
/****************************************************/
/************************************************************************/


/*****************************************************KANAP DB CONNEXION*/
dotenv.config();

const userName: string = process.env.DB_USERNAME;
const password: string = process.env.DB_PASSWORD;
const dbName: string = process.env.DB_NAME_KANAP;

const kanapConnectionString: string = `mongodb+srv://${userName}:${password}@nexus.uiyej.mongodb.net/${dbName}`;

export const kanapConnexion: mongoose.Connection = connectToDatabase(kanapConnectionString, dbName);
/************************************************************************/