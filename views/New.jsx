import React from "react";

const New = () => {
    return (
        <>
            <h1>Add A Pokemon!</h1>
            <form action='/pokemon' method='POST' >
                Name:  <input type='text' name='name'/>
                < br />
                JPG Image Link : <input type='text' name='img' />
                <br />
                <input type='submit' name='' value='Add the Pokemon!' />
            </form>
            <h3>PS: Please exclude ".jpg" from the image link. I'll take care of that part! </h3>
        </>
    )
};

module.exports = New;