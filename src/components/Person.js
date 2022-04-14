import React from 'react'; 

const Person = (props) => {
    return (

        <>
        <h2>I am a person.  My name is {props.firstName} {props.lastName}.</h2> 
        </>

    )
}

export default Person; 