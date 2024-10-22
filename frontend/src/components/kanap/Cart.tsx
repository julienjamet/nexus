/****************************************************************IMPORTS*/
/****************************************NPM MODULES*/
import { FC, ReactElement } from 'react';
/****************************************************/

/*****************************************INTERFACES*/

/****************************************************/

/*****************************************COMPONENTS*/

/****************************************************/
/************************************************************************/

export const Cart: FC = (): ReactElement => {
    return (
        <main className="box">
            <div className="subbox" id="subbox">
                <div className="cartAndFormbox" id="cartAndFormbox">
                    <h1 id="h1">Votre panier</h1>
                    <section className="cart">
                        <section id="cart__items">
                            <article className="cart__item" data-id="{product-ID}" data-color="{product-color}">
                                <div className="cart__item__img">
                                    <img src="../images/product01.jpg" alt="Photographie d'un canapé"></img>
                                </div>

                                <div className="cart__item__content">
                                    <div className="cart__item__content__description">
                                        <h2>Nom du produit</h2>
                                        <p>Vert</p>
                                        <p>42,00 €</p>
                                    </div>

                                    <div className="cart__item__content__settings">
                                        <div className="cart__item__content__settings__quantity">
                                            <p>Qté : </p>
                                            <input type="number" className="itemQuantity" name="itemQuantity" min="1" max="100" value="42"></input>
                                        </div>

                                        <div className="cart__item__content__settings__delete">
                                            <p className="deleteItem">Supprimer</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </section>

                        <div className="cart__price">
                            <p>
                                Total (<span id="totalQuantity">2</span> article(s)) :
                                <span id="totalPrice"></span> €
                            </p>
                        </div>

                        <div className="cart__order">
                            <form method="get" className="cart__order__form">
                                <div className="cart__order__form__question">
                                    <label htmlFor="firstName">Prénom: </label>
                                    <input type="text" name="firstName" id="firstName" required />
                                    <p id="firstNameErrorMsg">
                                        Ceci est un message d'erreur
                                    </p>
                                </div>

                                <div className="cart__order__form__question">
                                    <label htmlFor="lastName">Nom: </label>
                                    <input type="text" name="lastName" id="lastName" required />
                                    <p id="lastNameErrorMsg"></p>
                                </div>

                                <div className="cart__order__form__question">
                                    <label htmlFor="address">Adresse: </label>
                                    <input type="text" name="address" id="address" required />
                                    <p id="addressErrorMsg"></p>
                                </div>

                                <div className="cart__order__form__question">
                                    <label htmlFor="city">Ville: </label>
                                    <input type="text" name="city" id="city" required />
                                    <p id="cityErrorMsg"></p>
                                </div>

                                <div className="cart__order__form__question">
                                    <label htmlFor="email">Email: </label>
                                    <input type="email" name="email" id="email" required />
                                    <p id="emailErrorMsg"></p>
                                </div>

                                <div className="cart__order__form__submit">
                                    <input type="submit" value="Commander !" id="order" />
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
};