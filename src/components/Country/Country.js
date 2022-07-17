import React from 'react';
import './Country.css';
const Country = (props) => {
    // console.log(props);
    console.log(props.country);
    const {name,flag, capital,population,region} = props.country;
    return (
        <div className='country'>
            {/* <h2>This is country</h2> */}
            <h1>Name: {name}</h1>
            <img src={flag} alt="" />
            <p><small>{region}</small></p>
            <p>Capital is: {capital} Population: {population}</p>
        </div>
    );
};

export default Country;