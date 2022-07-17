import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';  


const Countries = () => {
    const [countries,setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data=> setCountries(data))
    },[])

    return (
        <div >
            <h1>Hello from Countries: {countries.length}</h1>
            <div className="countries-container">
            {
                countries.map(country => <Country key={country.capital} country={country} />)
            }
            </div>
            
        </div>
    );
};

//react extension pack


export default Countries;