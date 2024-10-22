/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { FC, ReactElement } from 'react';
/****************************************************/
/************************************************************************/


/*****************************************************************FOOTER*/
export const Footer: FC = (): ReactElement => {
    /*****************************************RETURN TSX*/
    return (
        <footer className='box footer'>
            <div className='box footer--primary'>
                <div>
                    <img
                        className='logo'
                        src='../images/kanap/logo.png'
                        alt="Logo de l'entreprise"
                    />
                </div>

                <p>10 quai de la charente <br />75019 Paris 19</p>

                <p>Téléphone : 01 23 45 67 89</p>

                <p>Email : support@name.com</p>
            </div>

            <div className='box footer--secondary'>
                © Copyright 2021 - 2042 | Openclassrooms by Openclassrooms | All
                Rights Reserved | Powered by Openclassrooms
            </div>
        </footer>
    );
    /****************************************************/
};
/************************************************************************/