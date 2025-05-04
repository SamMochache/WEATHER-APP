// src/App.tsx
import { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/weather?city=${city}`);
      const text = await res.text(); // get raw text
      console.log('Raw response:', text);
  
      const json = JSON.parse(text); // try to parse it
      setData(json);
      setError('');
    } catch (err) {
      console.error('Fetch error:', err.message);
      setError('Something went wrong. Check console for details.');
      setData(null);
    }
  };
  
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Weather App</h1>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
        <button className="btn btn-primary" onClick={fetchWeather}>Search</button>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      {data && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{data.name}, {data.sys.country}</h5>
            <p className="card-text">{data.weather[0].description}</p>
            <p className="card-text">Temperature: {data.main.temp}&deg;C</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;