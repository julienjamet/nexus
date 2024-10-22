/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
/****************************************************/
/************************************************************************/


/********************************************************************NAV*/
export const Nav: FC = (): ReactElement => {
    /*****************************************RETURN TSX*/
    return (
        <nav>
            <NavLink to='kanap'>Kanap</NavLink>
        </nav>
    );
    /****************************************************/
};
/************************************************************************/