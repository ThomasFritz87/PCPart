import hardware from "./hardware.json"

// import {useState, useEffect} from "react"

import './offer.css'


function Offer(props) {

    function find(article) {
        return props.category.toLowerCase() == article.Komponente.toLowerCase()
    }

    function show(article, index) {
        return (
            <div className="article" id={index} key={index}>
                <p className="price">Preis: {article.Preis} €</p>
                <button>Kaufen</button>
                <img src={article.Bild} />
                <div className="desc">
                    <p>Produkt: {article.Produkt}</p>
                    {/* <p>Details: {article.Beschreibung}</p> */}
                </div>
            </div>
        )
    }

    return (
        <section className="offer">
            {hardware.filter(find).map(show)}
        </section>
    )
}

export default Offer