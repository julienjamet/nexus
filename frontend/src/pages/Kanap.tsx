/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { FC, ReactElement, useState, useEffect } from 'react';
/****************************************************/

/*****************************************COMPONENTS*/
import { Header } from '../components/kanap/Header';
import { Home } from '../components/kanap/Home';
import { Products } from '../components/kanap/Products';
import { Cart } from '../components/kanap/Cart';
import { Confirmation } from '../components/kanap/Confirmation';
import { Footer } from '../components/kanap/Footer';
/****************************************************/
/************************************************************************/


/******************************************************************KANAP*/
export const Kanap: FC = (): ReactElement => {
    /*********************************************STATES*/
    const [page, setPage] = useState<string>('home');
    const [isScriptActive, setIsScriptActive] = useState<boolean>(false);
    /****************************************************/

    /**********************************EFFECTS & METHODS*/
    // [ CREATE SCRIPT ] METHOD
    const createScript: Function = (): HTMLScriptElement => {
        const script: HTMLScriptElement = document.createElement('script');

        script.src = '../scripts/home.js';

        return script;
    };

    // [ CHECK STORED ACTIVE SCRIPT ] EFFECT
    useEffect((): void => {
        if (page === 'home') {
            const storedActiveScript: string | null = localStorage.getItem('storedActiveScript');

            if (storedActiveScript) {
                const script: HTMLScriptElement = createScript();

                document.body.appendChild(script);

                setIsScriptActive(true);
            }
        }
    }, [page]);

    // [ SWITCH SCRIPT ] METHOD
    const switchScript: Function = (): void => {
        if (!isScriptActive) {
            const script: HTMLScriptElement = createScript();

            document.body.appendChild(script);

            localStorage.setItem('storedActiveScript', 'true');

            setIsScriptActive(true);
        }
        else {
            localStorage.removeItem('storedActiveScript');

            setIsScriptActive(false);

            setPage('');

            setTimeout((): void => {
                setPage('home');
            }, 100);
        }
    };
    /****************************************************/

    /*****************************************RETURN TSX*/
    return (
        <div className='kanap'>
            <Header
                setPage={setPage}
                switchScript={switchScript}
                isScriptActive={isScriptActive}
            />

            {page === 'home' && <Home />}
            {page === 'products' && <Products />}
            {page === 'cart' && <Cart />}
            {page === 'confirmation' && <Confirmation />}

            <Footer />
        </div>
    );
    /****************************************************/
};
/************************************************************************/