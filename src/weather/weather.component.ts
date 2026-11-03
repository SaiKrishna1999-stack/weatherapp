import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Weather } from './weather.service';

@Component({
  selector: 'app-weather',
  imports: [FormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent implements OnInit {
  city = signal('Hyderabad');
  temperature = signal(0);
  feelsLike = signal(0);
  humidity = signal(0);
  summary = signal('');
  icon = signal('');

  constructor(
    private weatherService: Weather  ) {
  }

  ngOnInit(): void {
    this.loadWeather('Hyderabad');
  }

  searchCity(cityName: string): void {
    this.loadWeather(cityName);
  }

  private loadWeather(cityName: string): void {
    const city = cityName.trim();
    if (!city) {
      return;
    }

    this.weatherService.getWeather(city, 'metric').subscribe({
      next: (data:any) => {
        console.log(data);
        this.city.set(data.name);
        this.temperature.set(data.main.temp);
        this.feelsLike.set(data.main.feels_like);
        this.humidity.set(data.main.humidity);
        this.summary.set(data.weather[0].description);
        this.icon.set(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
      },
      error: (error) => {
        console.error('Error fetching weather data:', error);
      }
    });
  }
}
