import { bootstrapApplication } from '@angular/platform-browser';
import { WeatherComponent } from './weather/weather.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(WeatherComponent, {
  providers: [
    provideHttpClient()
  ]
})
  .catch((err) => console.error(err));
