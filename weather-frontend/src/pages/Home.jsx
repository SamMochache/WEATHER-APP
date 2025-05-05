import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-bg">
      <div className="home-bg-overlay">
        <div className="glass-card text-center">
          <h1 className="mb-4 fw-bold display-4">Welcome to the Weather App 🌍</h1>
          <p className="mb-4 fs-5">Get real-time weather updates for any city worldwide.</p>
          <Link to="/weather">
            <button className="btn btn-success btn-lg px-5 py-3">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
