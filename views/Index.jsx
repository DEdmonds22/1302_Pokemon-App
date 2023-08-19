import React from "react";

function Index({pokemon}) {
const divStyle = {
    backgroundColor: 'red'
};

    const titleStyle = {
        color: '#ffffff',
        backgroundColor: '#000000'
    };

    const linkStyle = {
        textDecoration: 'none',
        fontFamily: 'Monaco',
        textTransform: 'capitalize'
    };

    return (
        <div style={divStyle}>
            <h1 style={titleStyle}>See All The Pokemon</h1>
            <ul>
                {pokemon.map((choice, i) => {
                    return (
                        <li key={i} style={linkStyle}><img src={choice.img} alt={choice.name} /><br /> {choice.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

module.exports = Index;