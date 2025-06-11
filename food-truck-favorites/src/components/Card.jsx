import React from 'react';
import './Card.css';

const Card = ({ image, name, genre, menu}) => {
    return (
        <div className="card-container">
            <img src={image} className="truck" />
            <h3 className="card-name">{name}</h3>
            <h3 className="card-genre">{genre}</h3>
            <a className="card-link" href={menu}>
                <button className="card-button">View Menu</button>
            </a>
        </div>
    );
}

export default Card;