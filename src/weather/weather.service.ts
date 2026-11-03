import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_KEY = '5f69cde73badd76bb6815c6360ef3522';

@Injectable({
  providedIn: 'root',
})
export class Weather {
  constructor(private http: HttpClient) {}

  getWeather(city: string, metric: string) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: API_KEY,
        units: metric,
      },
    });
  }
}
