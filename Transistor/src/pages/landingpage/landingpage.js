import React, { useState } from "react";

//CSS
import "./landingpage.css";

//Components
import Card from "../../components/cards/card";

//Assets
import Logo from "../../assets/Logo/Logo.png";

import RedCard1 from "../../assets/Card 1/Imagem card-1.png";

import Grant from "../../assets/Personagens/Grant/Grant.png";
import Red from "../../assets/Personagens/Red/Red.png";
import Sybil from "../../assets/Personagens/Sybil/Sybil_2.png";

import PenaCaidaEsquerda from "../../assets/Card1-Details/Pena-1.png";
import PenaCaidaDireita from "../../assets/Card1-Details/Pena-2.png";
import PenaCaidaRetaEsquerda from "../../assets/Card1-Details/Pena-3.png";
import PenaCaidaRetaDireita from "../../assets/Card1-Details/Pena-4.png";

const LandingPage = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const enviar = (event) => {
        event.preventDefault();
        setNome("");
        setEmail("");
        setMsg("");
        alert("Mensagem enviada com sucesso! :)");
    }   

    const validarNome = (event) => {

    }   

    return (
        <>
            <header className="bg-dark" id="inicio">
                <img src={Logo} alt="SuperGiantGames" title="SuperGiantGames" loading="lazy"></img>
                <h1 className="montserrat texto-branco">SuperGiantGames</h1>
            </header>
            <main className="bg-dark">
                <section className="banner">
                    <div className="container-img-card1">
                        <h1 className="maiusculo texto-branco bold">Transistor - Red the singer</h1>
                        <img src={RedCard1} alt="Red" title="Red" loading="lazy"></img>
                        <p className="">"Olha, o que quer que você<br></br>esteja pensando, me faça<br></br>um favor, não solte."</p>
                    </div>
                </section>
                {/*<section className="container carrossel bg-dark">
                    <Card img={Grant} nomePersonagem="Grant" descricao="A Camerata foi apenas os dois no início, e suas fileiras nunca foram destinadas a exceder um número a ser contado em uma mão."/>
                    <Card img={Red} nomePersonagem="Red" descricao="Red, uma jovem cantora, entrou em posse do Transistor. Sendo a poderosa espada falante. O grupo Possessores quer tanto ela quanto o Transistor e está perseguindo implacavelmente a sua procura."/>
                    <Card img={Sybil} nomePersonagem="Sybil" descricao={`Sybil é descrita pelo Transistor como sendo os "olhos e ouvidos" da Camerata.`}/>
                </section>*/}
                <section className="gradient">
                    <div className="formulario">
                        <div className="container-formulario">
                            <div className="textos">
                                <h1 className="texto-verde montserrat maiusculo">Formulário</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <form>
                                <div className="dados">
                                    <input type="text" placeholder="Nome" required value={nome} onChange={event => setNome(event.target.value)} onBlur={event => validarNome(event)}></input>
                                    <input type="email" placeholder="Email" required value={email} onChange={event => setEmail(event.target.value)}></input>
                                </div>
                                <textarea placeholder="Mensagem" rows={5} required value={msg} onChange={event => setMsg(event.target.value)}></textarea>
                                <button onClick={event => enviar(event)} type="submit" className="texto-branco maiusculo">Enviar</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default LandingPage;