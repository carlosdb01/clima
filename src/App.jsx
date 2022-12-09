import { useEffect, useState } from "react";
import "./App.css";
import CardWeather from "./components/CardWeather";
// import img from './imag/img.jpg'

function App() {
  const [coords, setCoords] = useState();

  useEffect(() => {
    const success = (pos) => {
      const latlon = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      };
      setCoords(latlon);
    };

    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <div className="App">
      {/* <img src={img} alt="nubes" className='image-cloud'/> */}
        <CardWeather lon={coords?.lon} lat={coords?.lat} />
          
    </div>
  )
}

export default App;
