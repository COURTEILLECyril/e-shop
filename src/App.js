import React, { Fragment, useState } from "react";

import"../src/css/App.css"
import Axe from "./img/battle-axe.jpg"
import Potion from "./img/life-potion.jpg"
import Scroll from "./img/fire-scroll.png"
import Panier from "./component/Panier";
import Article from "./component/Article";


function App() {
// ----------------------------------------------------------------------------------------------------------------------------------------

  // STATE 

  let [data, setData] = useState({
    gold: 20,
    panier: [],
  })

  // ARTICLES

  let [articles] = useState([
    {
      nom: "Battle Axe",
      prix: 6,
      dispo: 2,
      image: Axe,
      quantité : 0
    },
    {
      nom: "Life Potion",
      prix: 2,
      dispo: 5,
      image: Potion,
      quantité : 0
    },
    { 
      nom: "Fire Scroll",
      prix: 9,
      dispo: 1,
      image: Scroll,
      quantité : 0
    },
  ])

  // QUANTITE ACHETEE
  let [qty, setQty] = useState({
    dispoAxe : 0,
    dispoPotion : 0,
    dispoScroll : 0
  })

// ----------------------------------------------------------------------------------------------------------------------------------------

  // FONCTION ACHAT
  
  let achat = (prix, nom) => {


    // GOLD

    let newGold = data.gold;
    newGold = newGold - prix;

    setData(previousState => {
      return{...previousState, gold : newGold }
    })  

    // NOMBRE D'ARTICLES DANS LE PANIER 

    data.panier.push(nom)


    // QUANTITE + MAJ DES STOCKS
    
    if (nom === "Battle Axe") {

      let newQty = qty.dispoAxe
      newQty = newQty + 1
      setQty(previousState =>{
        return{...previousState, dispoAxe : newQty}
      })
      articles[0].dispo -= 1

    } else if (nom === "Life Potion") {

      let newQty = qty.dispoPotion
      newQty += 1
      setQty(previousState =>{
        return{...previousState, dispoPotion : newQty}
      })
      articles[1].dispo -= 1

    } else if (nom === "Fire Scroll") {

      let newQty = qty.dispoScroll
      newQty += 1
      setQty(previousState =>{
        return{...previousState, dispoScroll : newQty}
      })
      articles[2].dispo -= 1

    }
  }

// ----------------------------------------------------------------------------------------------------------------------------------------


  // FUNCTION RETOUR + MAJ DES STOCKS

  let retourParentArt = (nom, prix) =>{
    if (nom ==="Battle Axe") {
      let newQty = qty.dispoAxe
      newQty = newQty - 1
      setQty(previousState =>{
        return{...previousState, dispoAxe : newQty}
      })
      articles[0].dispo += 1
      let newGold = data.gold;
      newGold = newGold + prix;
      setData(previousState => {
        return{...previousState, gold : newGold }
      })  

    } else if (nom ==="Life Potion") {
      let newQty = qty.dispoPotion
      newQty = newQty - 1
      setQty(previousState =>{
        return{...previousState, dispoPotion : newQty}
      })
      articles[1].dispo += 1
      let newGold = data.gold;
      newGold = newGold + prix;
      setData(previousState => {
        return{...previousState, gold : newGold }
      })
       
    } else if (nom ==="Fire Scroll") {
      let newQty = qty.dispoScroll
      newQty = newQty - 1
      setQty(previousState =>{
        return{...previousState, dispoScroll : newQty}
      })
      articles[2].dispo += 1
      let newGold = data.gold;
      newGold = newGold + prix;
      setData(previousState => {
        return{...previousState, gold : newGold }
      })  
    }

    data.panier.pop()
  }






// ----------------------------------------------------------------------------------------------------------------------------------------

  return(
    <Fragment>
      <div className="divTitre">
        <h1>BIENVENUE DANS LE TOUT PREMIER E-SHOP MEDIEVAL</h1>
        <h3>Votre argent : <span>{data.gold} pièces d'or</span> </h3>
      </div>
      <div className="shop">
        <h2>Nos produits phares :</h2>  
        <div className="article">
          {articles.map( (e,i) => {
            return <Article donnee={e} key={i} buy={achat} gold ={data.gold}  />
            })      
          }
        </div>
      </div>
      <Panier panier={data.panier} arti={articles} qty={qty} onRetourArt={retourParentArt} />
    </Fragment>
  )
}

export default App;
