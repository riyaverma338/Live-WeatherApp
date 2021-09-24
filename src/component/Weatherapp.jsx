import React, {useEffect,useState} from 'react';
import '../css/Weatherapp.css';
import location from '../location.gif.gif'

export default function Weatherapp() {

    const [city, setCity] = useState(null);   //hook
    const [search, setSearch] = useState("Mumbai"); //useEffect() hook tells react that your component needs to do something after render. React will remember the function you passed and call it later after performing the DOM updates.  

    useEffect( () => {
        const fetchApi = async () =>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=43b7f97089111f4a01c6e892be4277e1`
            const response = await fetch(url); //fetch api returns promise
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson);
        }

        fetchApi(); //always call the function in the bottom in fat arrow function
    })

    return (
        <>
        <div className="box">
            <div className="inputData">
                <input type="search" className="inputField" onChange={ (event) =>{setSearch(event.target.value) } } />
            </div>

        <div className="info">
            <h2 className="location">
                {search}
                <img src={location} alt="location"/>
            </h2>
            <h1 className="temp">
                5.25°Cel
            </h1>
            <h3 className="tempmin_max">Min : 5.25°Cel | Max : 5.25°Cel</h3>
        </div>

        <div className="wave">
        {/* <div className="wave-one"></div>  */}
        <div className="wave-two"></div> 
        <div className="wave-three"></div> 
        </div>
        </div>
        </>
    )
}
