import { COLORS } from "./helpers/colors.ts";

interface Observer {
  update(weatherData: string): void;
}

class WeatherStation {
  private observers: Observer[] = [];
  private weatherData: string = "Sunny";

  public subscribe(observer: Observer): void {
    this.observers.push(observer);
    observer.update(this.weatherData);
    console.debug(
      "%cNew application subscribed to the weather system.",
      COLORS.green
    );
  }

  public unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((sub: Observer) => sub !== observer);
    console.debug(`%cAn application has unsubscribed`, COLORS.red);
  }

  public setWeather(weatherDataIn: string): void {
    this.weatherData = weatherDataIn;
    console.debug(`\nWeather updated: %c${weatherDataIn}`, COLORS.blue);
    this.notifyObservers();
  }

  private notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.weatherData);
    }
  }
}

class WeatherApp implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public update(weatherData: string): void {
    console.debug(
      `%c${this.name} %chas received weather notification: %c${weatherData}`,
      COLORS.red,
      COLORS.white,
      COLORS.yellow
    );
  }
}

function main(): void {
  const weatherStation: WeatherStation = new WeatherStation();

  const flutterWeatherApp: WeatherApp = new WeatherApp("Flutter WeatherApp");
  const reactNativeWeatherApp: WeatherApp = new WeatherApp(
    "React Native WeatherApp"
  );
  const weatherTrackerApp: WeatherApp = new WeatherApp("Weather Tracker App");

  weatherStation.subscribe(flutterWeatherApp);
  weatherStation.subscribe(reactNativeWeatherApp);

  weatherStation.setWeather("Rainy");

  weatherStation.subscribe(weatherTrackerApp);
  weatherStation.setWeather("Cloudy");

  weatherStation.unsubscribe(reactNativeWeatherApp);
  weatherStation.setWeather("Thunderstorm");
}

main();
