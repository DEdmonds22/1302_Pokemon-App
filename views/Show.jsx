import React from "react";

function Show({choice}) {
    const divStyling = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        direction: 'column',
        gap: '3rem'
    }
    
    const h1Style = {
        fontFamily: 'Monaco',
        textTransform: 'capitalize'
    }

    return(
        <div style={divStyling}>
            <img src={choice.img} />
            <h1 style={h1Style}>You chose {choice.name}!</h1>
        </div>
    );
};

module.exports = Show;