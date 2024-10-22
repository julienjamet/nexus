/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { FC, ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/****************************************************/

/*********************************PAGES & COMPONENTS*/
import { Nav } from './components/nexus/Nav';
import { Kanap } from './pages/Kanap';
/****************************************************/
/************************************************************************/


/**************************************************************NEXUS APP*/
export const App: FC = (): ReactElement => {
    /*****************************************RETURN TSX*/
    return (
        <BrowserRouter>
            {/* <Nav /> */}

            <Routes>
                <Route path='/kanap' element={<Kanap />} />

                <Route path='' element={<Kanap />} />
            </Routes>
        </BrowserRouter>
    );
    /****************************************************/
};
/************************************************************************/