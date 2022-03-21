import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Routes,
} from "react-router-dom";
  import SearchBar from "./Components/SearchBar";
  import Recherche from "./Recherche";
  import Carte from "./Carte";
  import Data from "./data.json"
  import Header from "./Header";

class Main extends Component {
  render() {
    return (
      <HashRouter>
          <div className="header">
          <Header />
        </div>
        <div className="content">
        <h2>De quoi s'agit-t'il ?</h2>
        <p>L’indice de fragilité numérique des territoires a été produit dans 
          le cadre du programme IncubO, dispositif d'accompagnement à la transformation 
          numérique porté par la préfecture de région Occitanie, avec le concours de l’Agence
          nationale des solidaités actoves (ANSA), en partenariat avec la Mednum, grâce au soutien 
          du Fond de transformation pour l’action publique (FTAP).</p>
      </div>
        <div>
          <ul>
            <li className="li-space"><NavLink exact to="/">Rechercher par lieu</NavLink></li>
            <li className="li-space"><NavLink to="/carte">Rechercher sur la carte</NavLink></li>
          </ul>
          <div>
            <Routes>
              <Route exact path="/" element={<Recherche />} />
              <Route path="/carte" element={<Carte />}/>
            </Routes>
          </div>
        </div>
        
      </HashRouter>
     );
  }
}

export default Main;