/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { FC, ReactElement } from 'react';
/****************************************************/

/*****************************************INTERFACES*/

/****************************************************/

/*****************************************COMPONENTS*/

/****************************************************/
/************************************************************************/

export const Confirmation: FC = (): ReactElement => {
    return (
        <main className="box">
            <div className="subbox" id="subbox">
                <div className="confirmation" id="confirm">
                    <p>
                        Commande validée ! <br />Votre numéro de commande est :
                        <span id="orderId">65431343444684674</span>
                    </p>
                </div>
            </div>
        </main>
    )
};