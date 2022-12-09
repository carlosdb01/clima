import axios from 'axios'
import React, {useEffect, useState} from 'react'
import LoadingScreen from './LoadingScreen'

const CardWeather = ({lat, lon}) => {


    const [weather, setWeather] = useState()
    const [temperture, setTemperture] = useState()
    const [isCelsius, setIsCelsius] = useState(true)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (lat){
        const APIKey = '5d5ebf1c7f34a0acd3d47bc155bab520'
        const URL= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`
       
    axios.get(URL)
    .then(res => {
        setWeather(res.data)
        const temp = {
            celsius: `${Math.round(res.data.main.temp - 273.15)} °C` ,
            farenheit: `${Math.round((res.data.main.temp - 273.15) * 9 / 5 + 32)} °F`
        }
        setTemperture(temp)
        setIsLoading(false)
    })
    .catch(err => console.log(err))
    }  
    }, [lat, lon])

    console.log(weather)

    const handleClick = () => setIsCelsius (!isCelsius)
    if(isLoading) {
return <LoadingScreen />
    }else{ 
    }

  return (
    <article className='card__container'>
        <div className='card__central'>
        <h1 className='card__title'>Weather App</h1>
        <h2 className='card__titletwo'>{`${weather?.name}`}</h2>
        <h3>{weather?.sys.country}</h3>
        <div>
        
            <div>
                <h3>&#34;{weather?.weather[0].description}&#34;</h3>
                <ul className='card__ul'>
                 <li><span>Wind speed </span>{weather?.wind.speed} m/s</li>
                 <li><span>Clouds </span>{weather?.clouds.all}%</li>
                 <li><span>Pressure </span>{weather?.main.pressure} hPa</li>
                </ul>
            </div>
        </div>
        <h2 className='card__temperture'>{isCelsius ? temperture?.celsius : temperture?.farenheit}</h2>
        <button onClick={handleClick} className='card__btn'>{isCelsius ? 'change to °F': 'change to °C'}</button>
        </div>
    </article>
  )
}

export default CardWeather