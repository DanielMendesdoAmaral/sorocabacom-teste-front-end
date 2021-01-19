import React from "react";

//CSS
import "./card.css";

const Card = ({img, nomePersonagem, descricao}) => {
    return (
        <article className="card">
            <div className="card-img">
                <img src={img} alt={nomePersonagem} title={nomePersonagem} loading="lazy"></img>
            </div>
            <div className="container-texto">
                <p>{descricao}</p>
            </div>
        </article>
    )
}

export default Card;