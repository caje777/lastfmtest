import requests

API_KEY = 'your_api_key'
USERNAME = 'your_lastfm_username'
PERIOD = '1month'
URL = f'http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user={USERNAME}&period={PERIOD}&api_key={API_KEY}&format=json'

response = requests.get(URL)
data = response.json()

with open('data.json', 'w') as f:
    json.dump(data, f, indent=4)
