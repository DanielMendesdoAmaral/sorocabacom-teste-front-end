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

//react-scroll -> Transição suave entre links internos
import { Link } from "react-scroll";

//Carrossel
//react-multi-carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const LandingPage = () => {
    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1025
            },
            items: 3
        },
        laptop: {
            breakpoint: {
                max: 1024,
                min: 769
            },
            items: 2.5
        },
        tabletS: {
            breakpoint: {
                max: 500,
                min: 426
            },
            items: 1.4
        },
        tabletM: {
            breakpoint: {
                max: 650,
                min: 501
            },
            items: 1.7
        },
        tabletL: {
            breakpoint: {
                max: 768,
                min: 651
            },
            items: 2.1
        },
        mobileS: {
            breakpoint: {
                max: 320,
                min: 0
            },
            items: 1
        },
        mobileM: {
            breakpoint: {
                max: 375,
                min: 321
            },
            items: 1
        },
        mobileL: {
            breakpoint: {
                max: 425,
                min: 376
            },
            items: 1.2
        }
    }

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const [erroNome, setErroNome] = useState("");
    const [erroEmail, setErroEmail] = useState("");
    const [erroMsg, setErroMsg] = useState("");

    const enviar = (event) => {
        event.preventDefault();
        setNome("");
        setEmail("");
        setMsg("");
        alert("Mensagem enviada com sucesso! :)");
    }   

    const validarNome = (nome) => {
        nome = nome.trim();
        if(nome.length<2)
            setErroNome("Nome muito curto (mín 2 caracateres).");
        else 
            setErroNome("");
    }

    const validarEmail = (email) => {
        email = email.trim();
        if(!email.includes("@")||!email.includes(".com"))
            setErroEmail("Email inválido.");
        else
            setErroEmail("");
    }

    const validarMsg = (msg) => {
        msg = msg.trim();
        if(msg.length<5)
            setErroMsg("Mensagem muito curta (mín 5 caracteres).");
        else 
            setErroMsg("");
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
                        <img src={RedCard1} alt="Red" title="Red" loading="lazy" className="red"></img>
                        <p className="texto-pequeno">"Olha, o que quer que você<br></br>esteja pensando, me faça<br></br>um favor, não solte."</p>
                        <Link to="campeoes" smooth={true} duration={500}>
                            <div>
                                <i class="fas fa-mouse"></i>
                                <i class="fas fa-chevron-down"></i>
                            </div>
                        </Link>
                    </div>
                </section>
                <section id="campeoes" className="container personagens bg-dark">
                    <Carousel minimumTouchDrag={0} responsive={responsive} draggable={false}>
                        <Card img={Grant} nomePersonagem="Grant" descricao="A Camerata foi apenas os dois no início, e suas fileiras nunca foram destinadas a exceder um número a ser contado em uma mão."/>
                        <Card img={Red} nomePersonagem="Red" descricao="Red, uma jovem cantora, entrou em posse do Transistor. Sendo a poderosa espada falante. O grupo Possessores quer tanto ela quanto o Transistor e está perseguindo implacavelmente a sua procura."/>
                        <Card img={Sybil} nomePersonagem="Sybil" descricao={`Sybil é descrita pelo Transistor como sendo os "olhos e ouvidos" da Camerata.`}/>
                        <Card img={Sybil} nomePersonagem="Sybil" descricao={`Sybil é descrita pelo Transistor como sendo os "olhos e ouvidos" da Camerata.`}/>
                        <Card img={Sybil} nomePersonagem="Sybil" descricao={`Sybil é descrita pelo Transistor como sendo os "olhos e ouvidos" da Camerata.`}/>
                    </Carousel>
                </section>
                <section className="gradient">
                    <div className="formulario">
                        <div className="container-formulario">
                            <div className="textos">
                                <h1 className="texto-verde montserrat maiusculo">Formulário</h1>
                                <p className="texto-pequeno">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <form>
                                <div className="dados">
                                    <div>
                                        <input type="text" placeholder="Nome" required value={nome} onChange={event => setNome(event.target.value)} onKeyUp={event => validarNome(event.target.value)} style={{borderColor: erroNome!==""?"red":"#363636"}}></input>
                                        <p className="erro">{erroNome}</p>
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email" required value={email} onChange={event => setEmail(event.target.value)} onKeyUp={event=>validarEmail(event.target.value)} style={{borderColor: erroEmail!==""?"red":"#363636"}}></input>
                                        <p className="erro">{erroEmail}</p>
                                    </div>
                                </div>
                                <textarea placeholder="Mensagem" rows={5} required value={msg} style={{borderColor: erroMsg!==""?"red":"#363636"}} onChange={event => setMsg(event.target.value)} onKeyUp={event=>validarMsg(event.target.value)}></textarea>
                                <p className="erro">{erroMsg}</p>
                                <button onClick={event => erroMsg!==""||erroEmail!==""||erroNome!==""||nome.length<2||!email.includes("@")||!email.includes(".com")||msg.length<5?alert("Preencha os campos e/ou resolva os erros!"):enviar(event)} type={erroMsg===""||erroEmail===""||erroNome===""?"button":"submit"} className="texto-branco maiusculo" style={{opacity: erroMsg!==""||erroEmail!==""||erroNome!==""||nome.length<2||!email.includes("@")||!email.includes(".com")||msg.length<5? "0.5" : "1"}}>Enviar</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="container">
                <Link to="inicio" smooth={true} duration={500}><i className="fas fa-chevron-circle-up"></i></Link>
            </footer>
        </>
    );
}

export default LandingPage;