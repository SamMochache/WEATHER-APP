import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Weather from './pages/Weather';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="*" element={<div className="text-center mt-5">404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
