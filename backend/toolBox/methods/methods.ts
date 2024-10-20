/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import mongoose from 'mongoose';
/****************************************************/

/**********************************************ENUMS*/
import { ansi } from '../enums/enums';
/****************************************************/
/************************************************************************/


/****************************************************DB CONNEXION METHOD*/
export const connectToDatabase: Function = (connectingString: string, dbName: string): mongoose.Connection => {
    const connection: mongoose.Connection = mongoose.createConnection(connectingString);

    connection.on('connected', (): void => {
        console.log(`${ansi.green}Connected to [ ${ansi.yellow}${dbName}${ansi.green} ] database`);
    });

    connection.on('error', (): void => {
        console.error(`${ansi.red}Connection to [ ${ansi.yellow}${dbName}${ansi.red} ] database has failed`);
    });

    return connection;
};
/************************************************************************/