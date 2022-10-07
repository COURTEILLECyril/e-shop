import React, { Fragment,  } from "react";
import "../css/Panier.css"

function Panier(props) {

    let retourArt = (nom, prix) =>{
       props.onRetourArt(nom, prix)
    }


    return (
        <Fragment>
            <hr />
            <h3 className="titreCheckout">Votre panier contient actuellement {props.panier.length} articles</h3>
            <ul className="checkout" >
                {props.qty.dispoAxe != "0" &&
                    <li>
                        <div className="checkoutArticle">
                            <img src={props.arti[0].image} alt="" />
                            <h3>{props.arti[0].nom}</h3>
                            <h3> Prix : {props.arti[0].prix} pièces d'or</h3>
                            <p> Nombre : {props.qty.dispoAxe} </p>
                            <button onClick={() =>retourArt( props.arti[0].nom, props.arti[0].prix)}> Rendre</button>
                        </div>

                    </li>
                }

                {props.qty.dispoPotion != "0" &&
                    <li>
                        <div className="checkoutArticle">
                            <img src={props.arti[1].image} alt="" />
                            <h3>{props.arti[1].nom}</h3>
                            <h3> Prix : {props.arti[1].prix} pièces d'or</h3>
                            <p> Nombre : {props.qty.dispoPotion} </p>
                            <button onClick={() => retourArt(props.arti[1].nom, props.arti[1].prix)}> Rendre</button>
                        </div>
                    </li>
                }

                {props.qty.dispoScroll != "0" &&
                    <li>
                        <div className="checkoutArticle">
                            <img src={props.arti[2].image} alt="" />
                            <h3>{props.arti[2].nom}</h3>
                            <h3> Prix : {props.arti[2].prix} pièces d'or</h3>
                            <p> Nombre : {props.qty.dispoScroll} </p>
                            <button onClick={() => retourArt( props.arti[2].nom, props.arti[2].prix)}> Rendre</button>
                        </div>
                    </li>
                }
            </ul>
        </Fragment>
    )
}

export default Panier