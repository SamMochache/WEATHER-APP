import { useState } from 'react';
import CitySearch from '../components/CitySearch';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError('');
    setData(null);

    try {
      // Fetch weather data
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/weather?city=${cityName}`);
      const json = await res.json();
      setData(json);

      // Fetch background image from Unsplash (optional API key)
      const imgRes = await fetch(`https://source.unsplash.com/1600x900/?${cityName}`);
      setImageUrl(imgRes.url);
    } catch (err) {
      console.error('Fetch error:', err.message);
      setError('Something went wrong. Check console for details.');
    }

    setLoading(false);
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropFilter: 'blur(5px)',
      }}
    >
      <div className="container app-container p-4 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}>
        <h1 className="text-center mb-4">🌦️ Weather Station</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <CitySearch onSelect={(selectedCity) => {
              setCity(`${selectedCity.name}, ${selectedCity.country}`);
              fetchWeather(selectedCity.name);
            }} />

            {loading && (
              <div className="text-center mt-3">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}

            {error && !loading && (
              <div className="alert alert-danger text-center mt-3">
                {error}
              </div>
            )}

            {data && !loading && (
              <div className="weather-card text-center mt-3 p-3 rounded bg-light shadow">
                <h4 className="fw-bold mb-2">{data.name}, {data.sys.country}</h4>
                <p className="text-capitalize lead mb-2">{data.weather[0].description}</p>
                <p className="fs-5">🌡️ {data.main.temp}&deg;C</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
