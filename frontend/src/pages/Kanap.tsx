/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { FC, ReactElement, useState, useEffect } from 'react';
/****************************************************/

/*****************************************COMPONENTS*/
import { Header } from '../components/kanap/Header';
import { Home } from '../components/kanap/Home';
import { Product } from '../components/kanap/Product';
import { Cart } from '../components/kanap/Cart';
import { Confirmation } from '../components/kanap/Confirmation';
import { Footer } from '../components/kanap/Footer';
/****************************************************/
/************************************************************************/


/******************************************************************KANAP*/
export const Kanap: FC = (): ReactElement => {
    /*********************************STATES & VARIABLES*/
    const [page, setPage] = useState<string>('home');
    const [isScriptActive, setIsScriptActive] = useState<boolean>(false);
    const [productId, setProductId] = useState<string>('');

    window.productId = productId;
    /****************************************************/

    /**********************************EFFECTS & METHODS*/
    // [ CREATE SCRIPT ] METHOD
    const createScript: Function = (path: string): HTMLScriptElement => {
        const script: HTMLScriptElement = document.createElement('script');

        script.src = `../scripts/${path}.js`;

        return script;
    };

    // [ CHECK STORED ACTIVE SCRIPT ] EFFECT
    useEffect((): void => {
        const storedActiveScript: string | null = localStorage.getItem('storedActiveScript');

        if (storedActiveScript) {
            const script: HTMLScriptElement = createScript(page);

            document.body.appendChild(script);

            setIsScriptActive(true);
        }
    }, [page]);

    // [ SWITCH SCRIPT ] METHOD
    const switchScript: Function = (): void => {
        if (!isScriptActive) {
            const script: HTMLScriptElement = createScript(page);

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
                page={page}
                switchScript={switchScript}
                isScriptActive={isScriptActive}
            />

            {page === 'home' &&
                <Home
                    setPage={setPage}
                    setProductId={setProductId}
                    isScriptActive={isScriptActive}
                    page={page}
                />
            }

            {page === 'product' && <Product productId={productId} />}
            {page === 'cart' && <Cart />}
            {page === 'confirmation' && <Confirmation />}

            <Footer />
        </div>
    );
    /****************************************************/
};
/************************************************************************/