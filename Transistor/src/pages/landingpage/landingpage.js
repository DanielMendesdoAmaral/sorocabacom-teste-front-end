import React from "react";

//CSS
import "./landingpage.css";

//Components
import Card from "../../components/cards/card";

//Assets
import Logo from "../../assets/Logo/Logo.png"

const LandingPage = () => {
    return (
        <>
            <header className="bg-dark">
                <img src={Logo} alt="SuperGiantGames" title="SuperGiantGames"></img>
                <h1 className="montserrat texto-branco">SuperGiantGames</h1>
            </header>
        </>
    );
}

export default LandingPage;