import { COLORS } from "./helpers/colors.ts";

interface Observer {
  update(weatherData: string): void;
}

// Clase Subject - WeatherStation
// TODO: Terminal la implementación
class WeatherStation {
  // observers = [];
  // weatherData = 'Soleado';

  // Agregar un Observer
  public subscribe(observer: Observer): void {
    // TODO: añadir observer

    console.debug(
      "%cNew application subscribed to the weather system.",
      COLORS.green
    );
  }

  // Eliminar un Observer
  public unsubscribe(observer: Observer): void {
    // TODO: eliminar observer

    console.debug(`%cAn application has unsubscribed`, COLORS.red);
  }

  // Actualizar el clima y notificar a todos los Observers
  public setWeather(weatherData: string): void {
    console.debug(`\nWeather updated: %c${weatherData}`, COLORS.blue);

    // TODO: actualizar clima y notificar a todos los Observers con el método notifyObservers
  }

  // Notificar a todos los Observers
  private notifyObservers(): void {
    // TODO: implementar método
    throw new Error("Method not implemented.");
  }
}

// Clase Observer - WeatherApp
class WeatherApp implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Recibir actualización del clima
  public update(weatherData: string): void {
    console.debug(
      `%c${this.name} %chas received weather notification: %c${weatherData}`,
      COLORS.red,
      COLORS.white,
      COLORS.yellow
    );
  }
}

// Código Cliente para Probar
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
