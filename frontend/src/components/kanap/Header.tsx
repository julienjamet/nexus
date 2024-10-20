/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { FC, ReactElement } from 'react';
/****************************************************/

/*****************************************INTERFACES*/
import { IKanapHeader } from '../../interfaces';
/****************************************************/

/*****************************************COMPONENTS*/
import { SwitchScript } from './SwitchScript';
/****************************************************/
/************************************************************************/


/*****************************************************************HEADER*/
export const Header: FC<IKanapHeader> = (props): ReactElement => {
    /*****************************************RETURN TSX*/
    return (
        <header>
            <div className='box header'>
                <ul>
                    <li>
                        <img
                            src='../images/kanap/icons/phone.svg'
                            alt='logo de téléphone'
                        />

                        <span>01 23 45 67 89</span>
                    </li>

                    <li>
                        <img
                            src='../images/kanap/icons/mail.svg'
                            alt="logo d'une enveloppe"
                        />

                        <span>support@name.com</span>
                    </li>

                    <li>
                        <img
                            src='../images/kanap/icons/adress.svg'
                            alt="logo d'un point de géolocalisation"
                            className='address'
                        />

                        <span>01 23 45 67 89</span>
                    </li>
                </ul>
            </div>

            <div className='box menu'>
                <img
                    onClick={(): void => props.setPage('home')}
                    src='../images/kanap/logo.png'
                    alt="Logo de l'entreprise"
                />

                <SwitchScript
                    switchScript={props.switchScript}
                    isScriptActive={props.isScriptActive}
                />

                <nav>
                    <ul>
                        <li onClick={(): void => props.setPage('home')}>
                            Accueil
                        </li>

                        <li onClick={(): void => props.setPage('cart')}>
                            Panier
                        </li>
                    </ul>
                </nav>
            </div>

            <img
                className='banner'
                src='../images/kanap/banniere.webp'
                alt='bannière'
            />
        </header>
    );
    /****************************************************/
};
/************************************************************************/