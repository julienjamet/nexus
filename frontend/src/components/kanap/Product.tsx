/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { FC, ReactElement } from 'react';
/****************************************************/

/*****************************************INTERFACES*/
import { IKanapProduct } from '../../interfaces';
/****************************************************/

/*****************************************COMPONENTS*/

/****************************************************/
/************************************************************************/


/***********************************************************PRODUCT PAGE*/
export const Product: FC<IKanapProduct> = (props): ReactElement => {
    /**********************************EFFECTS & METHODS*/
    // [ ] METHOD

    // [ ] EFFECT
    /****************************************************/

    /*****************************************RETURN TSX*/
    return (
        <main className='box'>
            <div id='img'></div>

            <div className='content'>
                <div className='section'>
                    <h1 id='title'></h1>

                    <p>
                        Prix : <span className='price' id='price'></span> €
                    </p>
                </div>

                <div className='section'>
                    <h2>Description :</h2>
                    <p id='description'></p>
                </div>

                <div className='section inputs'>
                    <div className='colors'>
                        <label htmlFor='select'>Choisir une couleur :</label>

                        <select name='select' id='select'>
                            <option value=''>--Choisissez une couleur--</option>
                        </select>
                    </div>

                    <div className='quantity'>
                        <label htmlFor='quantity'>Nombre d'article(s) (1-100) :</label>

                        <input
                            type='number'
                            name='quantity'
                            id='quantity'
                            min='1'
                            max='100'
                        />
                    </div>
                </div>

                <div className='buttonContainer'>
                    <div>Ajouter au panier</div>
                </div>
            </div>
        </main>
    );
    /****************************************************/
};
/************************************************************************/