import { useState } from 'react';
import CitySearch from '../components/CitySearch';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [unit, setUnit] = useState('C');

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError('');
    setData(null);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/weather?city=${cityName}`);
      const json = await res.json();
      setData(json);

      const imgRes = await fetch(`https://source.unsplash.com/1600x900/?${cityName}`);
      setImageUrl(imgRes.url);
    } catch (err) {
      console.error('Fetch error:', err.message);
      setError('Something went wrong. Check console for details.');
    }

    setLoading(false);
  };

  const convertTemp = (tempC) =>
    unit === 'C' ? Math.round(tempC) : Math.round((tempC * 9) / 5 + 32);

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
      <div
        className="container app-container p-4 rounded"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}
      >
        <h1 className="text-center mb-4">🌦️ Weather Station</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <CitySearch
              onSelect={(selectedCity) => {
                setCity(`${selectedCity.name}, ${selectedCity.country}`);
                fetchWeather(selectedCity.name);
              }}
            />

            {loading && (
              <div className="text-center mt-3">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}

            {error && !loading && (
              <div className="alert alert-danger text-center mt-3">{error}</div>
            )}

            {data && !loading && (
              <div className="weather-card mt-4 p-4 rounded shadow bg-white text-dark">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <h3 className="fw-bold mb-0">{data.name}, {data.sys.country}</h3>
                    <small className="text-muted text-capitalize">{data.weather[0].description}</small>
                    <div className="mt-2">
                      <strong>Local Time:</strong>{' '}
                      {new Date((data.dt + data.timezone) * 1000).toUTCString().replace('GMT', '')}
                    </div>
                  </div>
                  <img
                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    alt={data.weather[0].description}
                    className="weather-icon"
                    style={{ width: '80px', height: '80px' }}
                  />
                </div>

                <div className="text-end mb-2">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => setUnit(unit === 'C' ? 'F' : 'C')}
                  >
                    Show in °{unit === 'C' ? 'F' : 'C'}
                  </button>
                </div>

                <div className="row text-center border-top pt-3">
  <div className="col-6 col-md-4 mb-3">
    <i className="bi bi-thermometer-half fs-4 text-primary mb-1 d-block"></i>
    <h4>{convertTemp(data.main.temp)}°{unit}</h4>
    <small>Temperature</small>
  </div>
  <div className="col-6 col-md-4 mb-3">
    <i className="bi bi-emoji-smile fs-4 text-warning mb-1 d-block"></i>
    <h4>{convertTemp(data.main.feels_like)}°{unit}</h4>
    <small>Feels Like</small>
  </div>
  <div className="col-6 col-md-4 mb-3">
    <i className="bi bi-speedometer2 fs-4 text-danger mb-1 d-block"></i>
    <h4>{data.main.pressure} hPa</h4>
    <small>Pressure</small>
  </div>
  <div className="col-6 col-md-4 mb-3">
    <i className="bi bi-eye fs-4 text-info mb-1 d-block"></i>
    <h4>{(data.visibility / 1000).toFixed(1)} km</h4>
    <small>Visibility</small>
  </div>
  <div className="col-6 col-md-4 mb-3">
    <i className="bi bi-wind fs-4 text-secondary mb-1 d-block"></i>
    <h4>{data.wind.speed} m/s</h4>
    <small>Wind</small>
  </div>
  <div className="col-6 col-md-4 mb-3">
    <i className="bi bi-droplet-half fs-4 text-primary mb-1 d-block"></i>
    <h4>{data.main.humidity}%</h4>
    <small>Humidity</small>
  </div>
</div>



                {/* Simple Analytics */}
                <div className="mt-4 border-top pt-3">
                  <h5 className="text-secondary">📊 Weather Insights</h5>
                  <ul className="list-unstyled small">
                    <li>
                      <strong>Comfort Index:</strong>{' '}
                      {data.main.feels_like - data.main.temp >= 3 ? 'Hotter than it feels' : 'Feels accurate'}
                    </li>
                    <li>
                      <strong>Visibility Quality:</strong>{' '}
                      {data.visibility >= 8000 ? 'Excellent' : data.visibility >= 4000 ? 'Moderate' : 'Poor'}
                    </li>
                    <li>
                      <strong>Wind Alert:</strong>{' '}
                      {data.wind.speed >= 10 ? 'Strong winds — caution advised' : 'Normal'}
                    </li>
                    <li>
                      <strong>Humidity Level:</strong>{' '}
                      {data.main.humidity >= 80 ? 'High — might feel muggy' : 'Comfortable'}
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
