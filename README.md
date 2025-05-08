# 🌦️ Weather Station App

A fullstack **Weather App** using **Django (backend)** and **React with Vite (frontend)**. Users can search for weather by city, see current temperature, humidity, wind speed, toggle temperature units (°C/°F), and enjoy a dynamic city image powered by Unsplash. Deployed on **Render**.

---

## 📸 Live Demo

- 🌐 **Frontend**: [https://weather-frontend-p0lf.onrender.com](https://weather-frontend-p0lf.onrender.com)
- 🌐 **API Example**: [https://weather-backend-aagb.onrender.com/api/weather?city=Nairobi](https://weather-backend-aagb.onrender.com/api/weather?city=Nairobi)

## 🧩 Project Structure

weather-app/
├── backend/ # Django backend API
│ ├── weather/ # Weather API app
│ └── manage.py
├── frontend/ # React frontend (Vite)
│ ├── src/
│ └── vite.config.js
└── README.md



## 🔧 Features

- 🔍 Search weather by city
- 📡 Live weather from OpenWeatherMap API
- 🌆 City image via Unsplash{Not Necessarily optional}
- 🌡️ Temp in Celsius/Fahrenheit toggle
- 💧 Humidity, 💨 Wind Speed
- 🌀 Loading indicator
- 📱 Responsive & clean Bootstrap UI
- ☁️ Fully hosted on Render

---

## ⚙️ Setup Instructions

### Clone Project

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
🔙 Backend Setup (Django)
bash
Copy
Edit
cd backend
python -m venv venv
source venv/bin/activate        # On Windows: venv\Scripts\activate
pip install -r requirements.txt
Create .env
env
Copy
Edit
DEBUG=False
SECRET_KEY=your-django-secret
Run server locally
bash
Copy
Edit
python manage.py migrate
python manage.py runserver
🌐 API Usage
GET /api/weather?city=CityName

Returns JSON weather data

🌇 Frontend Setup (React with Vite)
bash
Copy
Edit
cd frontend
npm install
Create .env
env

VITE_API_BASE_URL=https://your-backend.onrender.com
Start React app
npm run dev
☁️ Hosting on Render
Backend (Django)
Create new Web Service

Build Command:
pip install -r requirements.txt && python manage.py collectstatic --noinput
Start Command:
gunicorn backend.wsgi
Set Environment Variables:
DEBUG=False
SECRET_KEY=your-django-secret
Make sure whitenoise, gunicorn, and CORS are configured

Frontend (React)
Create new Static Site

Build Command:
npm install && npm run build
Publish Directory:

nginx
dist
Add Env Var:

ini
Copy
Edit
VITE_API_BASE_URL=https://your-backend.onrender.com
📊 Future Enhancements (Analytics Ideas)
📈 Hourly temperature chart (Chart.js)

🌍 Interactive city map (Leaflet.js)

🧠 Weather trend analysis over days

🔊 Soundscapes for weather types

📅 Weekly forecast panel

🔔 Notification alerts for severe weather

🔍 Key Code Features
Dynamic City Image
js
Copy
Edit
const imgRes = await fetch(`https://source.unsplash.com/1600x900/?${cityName}`);
setImageUrl(imgRes.url);
Loading Spinner
js
Copy
Edit
{loading && <div className="spinner-border text-primary" />}
Unit Toggle
js
Copy
Edit
<button onClick={() => setUnit(unit === 'C' ? 'F' : 'C')}>°{unit === 'C' ? 'F' : 'C'}</button>
🛠 Tech Stack
Frontend	Backend	Hosting	APIs
React + Vite	Django	Render	OpenWeatherMap, Unsplash
Bootstrap 5	Gunicorn + Whitenoise		

👤 Author
Sam Mochache
📫 [Sammochache01@email.com]
🌐 https://thread-6im3.onrender.com/#home
🐙 GitHub

📄 License
This project is licensed under the MIT License.

🤝 Contribute
Pull requests are welcome. For major changes, open an issue first.







