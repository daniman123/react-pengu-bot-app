import requests
import json
from concurrent.futures import ThreadPoolExecutor

def fetch(url):
    response = requests.get(url)
    return response.json()

def scrape_api(base_url, locale, limit, max_offset):
    total_requests = (max_offset // limit) + 1  # Calculate the total number of requests
    with ThreadPoolExecutor() as executor:
        urls = [f"{base_url}?locale={locale}&limit={limit}&offset={offset}" for offset in range(0, max_offset + 1, limit)]
        results = list(executor.map(fetch, urls))
        return results

def save_to_json(data, filename='output.json'):
    with open(filename, 'w') as json_file:
        json.dump(data, json_file, indent=2)

if __name__ == "__main__":
    base_api_url = 'https://drop-api.ea.com/rating/fc-24'
    locale = 'en'
    limit = 100
    max_offset = 17300  # Adjust the maximum offset

    # Scrape data using ThreadPoolExecutor and requests
    scraped_data = scrape_api(base_api_url, locale, limit, max_offset)

    # Save the scraped data to a JSON file
    save_to_json(scraped_data, './lib/data/players.json')
    print("Data saved to './lib/data/players.json'")
