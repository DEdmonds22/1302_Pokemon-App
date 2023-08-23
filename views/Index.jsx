import React from "react";

function Index({pokemon}) {
const divStyle = {
    backgroundColor: '#b82525',
    textAlign: 'center',
    fontSize: '20px'
};

    const titleStyle = {
        color: '#ffffff',
        backgroundColor: '#000000'
    };

    const unorderedLinkStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const linkStyle = {
        listStyle: 'none',
        padding:"3rem 2rem",
        margin: '1rem',
        backgroundColor: 'black'
    };

    const aLinkStyle ={
        textDecoration: 'none',
        fontFamily: 'Monaco',
        textTransform: 'capitalize',
        color: 'purple',
        backgroundColor: 'black',
        border: '2px dotted white',
        padding: "1em"
    };

    return (
        <div style={divStyle}>
            <h1 style={titleStyle}>See All The Pokemon</h1>
            <ul style={unorderedLinkStyle}>
                {pokemon.map((choice, i) => {
                    return (
                        <li key={i} style={linkStyle}>
                            <img src={`${choice.img}.jpg `} alt={choice.name} />
                            <br />
                            <br />
                            <a href={`/pokemon/${choice._id}`} style={aLinkStyle}>{choice.name}</a>
                        </li>
                    )
                })}
            </ul>
            <a href="/pokemon/add">Add a Pokemon!</a>
        </div>
    );
};

module.exports = Index;