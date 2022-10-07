import React, { Fragment } from "react";
import "../css/Article.css"


function Article({donnee, buy, gold}) {

    const isDispoOrange = donnee.dispo === 1;
    const isDispoRed = donnee.dispo === 0;
    
    const styles = {

        bgOrange : {
            backgroundColor : "orange",
            color : "white"
        },

        bgRed : {
            backgroundColor : "red",
            color : "white"
        }
    }

    
    return(
        <Fragment>
            <div id="divArticle"
            style={ isDispoOrange ? styles.bgOrange : null} 
            >
                <div id="divBgRed" style={isDispoRed ? styles.bgRed : null}>

                    {donnee.dispo === 0? (<div id="bg-red"></div>) : (<div id="bg invisible"></div>)}
                    <h3>{donnee.nom}</h3>
                    <img src={donnee.image} alt="" />
                    <h4> <i>Pour la modique somme de {donnee.prix} pièces d'or</i></h4>
                    <p>Ne trainez pas, il ne reste que <b>{donnee.dispo} exemplaires</b> de cet article dans nos réserves !</p>
                    { donnee.dispo > 0 &&
                        <div>
                            {  gold >= donnee.prix &&  
                                <button onClick={() =>buy(donnee.prix, donnee.nom)}>Ajouter au Panier</button>
                            }
                            {  gold < donnee.prix &&  
                                <p id="soldOut">Il semblerait que votre bourse soit trop légère pour faire cet achat</p>
                            }
                        </div>
                    }
                    { donnee.dispo <= 0 &&
                        <h4>Je regrète, mon Seigneur, nos stocks de cette article sont vides ...</h4>
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Article