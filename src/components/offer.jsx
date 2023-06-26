import hardware from "./hardware.json"

import { useEffect } from "react"

import './offer.css'

// const hardware = [
//     {
//         "Produkt": "Mainboard",
//         "Hersteller": "Asus",
//         "Preis": 455.00,
//         "Details": "Das beste Mainboard, das es gibt!",
//         "image": "https://www.alternate.de/p/600x600/5/8/AMD_Ryzen__7_5800X__Prozessor@@1685585.jpg"
//     },
//     {
//         "Produkt": "Mainboard",
//         "Hersteller": "MSI",
//         "Preis": 300.00,
//         "Details": "Sehr cooles Mainboard!",
//         "image": "https://www.alternate.de/p/600x600/5/8/AMD_Ryzen__7_5800X__Prozessor@@1685585.jpg"
//     },
//     {
//         "Produkt": "Mainboard",
//         "Hersteller": "MSI",
//         "Preis": 300.00,
//         "Details": "Super Mainboard!",
//         "image": "https://www.alternate.de/p/600x600/5/8/AMD_Ryzen__7_5800X__Prozessor@@1685585.jpg"
//     },
//     {
//         "Produkt": "Graphics",
//         "Hersteller": "Nvidea",
//         "Preis": 455.00,
//         "Details": "Die beste Graphic, die es gibt!",
//         "image": "https://www.alternate.de/p/600x600/5/8/AMD_Ryzen__7_5800X__Prozessor@@1685585.jpg"
//     },
//     {
//         "Produkt": "Graphics",
//         "Hersteller": "AMD",
//         "Preis": 300.00,
//         "Details": "Sehr coole Graphic!",
//         "image": "https://www.alternate.de/p/600x600/5/8/AMD_Ryzen__7_5800X__Prozessor@@1685585.jpg"
//     },
//     {
//         "Produkt": "Graphics",
//         "Hersteller": "Intel",
//         "Preis": 150.00,
//         "Details": "Super Graphic!",
//         "image": "https://www.alternate.de/p/600x600/5/8/AMD_Ryzen__7_5800X__Prozessor@@1685585.jpg"
//     },
//     {
//         "Produkt": "Graphics",
//         "Hersteller": "Intel",
//         "Preis": 150.00,
//         "Details": "Super Graphic!",
//         "image": "https://www.alternate.de/p/600x600/5/8/AMD_Ryzen__7_5800X__Prozessor@@1685585.jpg"
//     },
//     {
//         "Produkt": "Graphics",
//         "Hersteller": "Intel",
//         "Preis": 150.00,
//         "Details": "Super Graphic!",
//         "image": "https://www.alternate.de/p/600x600/5/8/AMD_Ryzen__7_5800X__Prozessor@@1685585.jpg"
//     },
//     {
//         "Produkt": "Graphics",
//         "Hersteller": "Intel",
//         "Preis": 150.00,
//         "Details": "Super Graphic!",
//         "image": "https://www.alternate.de/p/600x600/5/8/AMD_Ryzen__7_5800X__Prozessor@@1685585.jpg"
//     },
//     {
//         "Produkt": "Graphics",
//         "Hersteller": "Intel",
//         "Preis": 150.00,
//         "Details": "Super Graphic!",
//         "image": "https://www.alternate.de/p/600x600/5/8/AMD_Ryzen__7_5800X__Prozessor@@1685585.jpg"
//     },
//     {
//         "Produkt": "Graphics",
//         "Hersteller": "Intel",
//         "Preis": 150.00,
//         "Details": "Super Graphic!",
//         "image": "https://www.alternate.de/p/600x600/5/8/AMD_Ryzen__7_5800X__Prozessor@@1685585.jpg"
//     }
// ]

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