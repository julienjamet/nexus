/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { FC, ReactElement } from 'react';
/****************************************************/

/*****************************************INTERFACES*/

/****************************************************/

/*****************************************COMPONENTS*/

/****************************************************/
/************************************************************************/

export const Products: FC = (): ReactElement => {
    return (
        <main className="box" id="main">
            <div className="subbox" id="item">
                <section className="item">
                    <article>
                        <div className="item__img">
                            <img src="../images/logo.png" alt="Photographie d'un canapé"></img>
                        </div>
                        <div className="item__content">
                            <div className="item__content__titlePrice">
                                <h1 id="title">Nom du produit</h1>
                                <p>
                                    Prix : <span id="price">42</span>€
                                </p>
                            </div>

                            <div className="item__content__description">
                                <p className="item__content__description__title">Description :</p>
                                <p id="description">
                                </p>
                            </div>

                            <div className="item__content__settings">
                                <div className="item__content__settings__color">
                                    <label htmlFor="color-select">Choisir une couleur :</label>
                                    <select name="color-select" id="colors">
                                        <option value="">--SVP, choisissez une couleur --</option>
                                        <option value="vert">vert</option>
                                        <option value="blanc">blanc</option>
                                    </select>
                                </div>

                                <div className="item__content__settings__quantity">
                                    <label htmlFor="itemQuantity"
                                    >Nombre d'article(s) (1-100) : </label>
                                    <input
                                        type="number"
                                        name="itemQuantity"
                                        min="1"
                                        max="100"
                                        value="0"
                                        id="quantity"
                                    />
                                </div>
                            </div>

                            <div className="item__content__addButton">
                                <button id="addToCart">Ajouter au panier</button>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        </main>
    )
};