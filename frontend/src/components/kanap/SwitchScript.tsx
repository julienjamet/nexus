/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { FC, ReactElement } from 'react';
/****************************************************/

/*****************************************INTERFACES*/
import { IKanapSwitchScript } from '../../interfaces';
/****************************************************/
/************************************************************************/


/**********************************************************SWITCH SCRIPT*/
export const SwitchScript: FC<IKanapSwitchScript> = (props): ReactElement => {
    /*****************************************RETURN TSX*/
    return (
        <div
            className={`switchScript ${props.isScriptActive ? 'active' : ''}`}
            onClick={(): void => props.switchScript()}
        >
            {!props.isScriptActive ? 'Activer le script' : 'Désactiver le script'}
        </div>
    );
    /****************************************************/
};
/************************************************************************/