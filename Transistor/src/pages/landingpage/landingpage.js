import React from "react";

//CSS
import "./landingpage.css";

//Components
import Card from "../../components/cards/card";

//Assets
import Logo from "../../assets/Logo/Logo.png";
import RedCard1 from "../../assets/Card 1/Imagem card-1.png";
import PenaCaidaEsquerda from "../../assets/Card1-Details/Pena-1.png";
import PenaCaidaDireita from "../../assets/Card1-Details/Pena-2.png";
import PenaCaidaReta from "../../assets/Card1-Details/Pena-4.png";

const LandingPage = () => {
    return (
        <>
            <header className="bg-dark">
                <img src={Logo} alt="SuperGiantGames" title="SuperGiantGames"></img>
                <h1 className="montserrat texto-branco">SuperGiantGames</h1>
            </header>
            <main>
                <section className="banner">
                    <div className="container-img-card1">
                        <h1 className="maiusculo texto-branco bold">Transistor - Red the singer</h1>
                        <img src={RedCard1} alt="Red" title="Red"></img>
                        <p className="">"Olha, o que quer que você<br></br>esteja pensando, me faça<br></br>um favor, não solte."</p>
                    </div>
                </section>
            </main>
        </>
    );
}

export default LandingPage;