import React from "react";

function Show({choice}) {
    const divStyling = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b82525',
    };

    const mainStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '3rem',
        color: '#ffffff',
        backgroundColor: 'black',
        padding: '5em',
        border: '4px dotted white',
    };
    
    const h2Style = {
        fontFamily: 'Monaco',
        textTransform: 'capitalize'
    };

    const linkStyle = {
        textDecoration: 'none',
        fontFamily: 'Monaco',
        color: 'purple',
        border: '2px dotted white',
        padding: "0.5em 2em"
    };

    return(
        <div style={divStyling}>
            <main style={mainStyle}>
                <h1>Gotta Catch 'Em All</h1>
                <img src={`${choice.img}.jpg `}/>
                <h2 style={h2Style}>You chose {choice.name}!</h2>
                <a href={`/pokemon`} style={linkStyle}>BACK</a>
            </main>
        </div>
    );
};

module.exports = Show;