/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { FC, ReactElement, useEffect } from 'react';
/****************************************************/

/*****************************************INTERFACES*/
import { IKanapHome } from '../../interfaces';
/****************************************************/
/************************************************************************/


/**************************************************************HOME PAGE*/
export const Home: FC<IKanapHome> = (props): ReactElement => {
    /**********************************EFFECTS & METHODS*/
    // [ SELECT ITEM ] METHOD
    const selectItem: Function = (id: string): void => {
        props.setProductId(id);
        props.setPage('product');
    };

    // [ ADD EVENT LISTENER ] EFFECT
    useEffect((): void => {
        setTimeout((): void => {
            const items: HTMLCollection = document.getElementsByClassName('item');
            const arrayOfItems: Element[] = Array.from(items);

            for (let item of arrayOfItems) {
                item.addEventListener('click', (): void => selectItem(item.id));
            }
        }, 500);
    }, [props.page, props.isScriptActive]);
    /****************************************************/

    /*****************************************RETURN TSX*/
    return (
        <main className='box'>
            <h1>Nos produits</h1>
            <h2>Une gamme d'articles exclusifs</h2>

            <section className='items' id='items'>
            </section>
        </main>
    );
    /****************************************************/
};
/************************************************************************/