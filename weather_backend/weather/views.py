from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests, os
from dotenv import load_dotenv

load_dotenv()

@api_view(['GET'])
def get_weather(request):
    city = request.GET.get('city', 'Lagos')
    api_key = os.getenv('OPENWEATHER_API_KEY')
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
    res = requests.get(url)
    if res.status_code == 200:
        return Response(res.json())
    return Response({"error": "City not found"}, status=404)