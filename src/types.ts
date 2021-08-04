export interface LottoDraw {
  ProductId: string;
  DrawNumber: number;
  DrawDisplayName: string;
  DrawDate: string;
  DrawLogoUrl: string;
  DrawType: string;
  Div1Amount: number;
  IsDiv1Estimated: boolean;
  IsDiv1Unknown: boolean;
  DrawCloseDateTimeUTC: string;
  DrawEndSellDateTimeUTC: string;
  DrawCountDownTimerSeconds: number;
}

export interface WeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export const productIdMapper: Record<string, { title: string; image: string }> = {
  MonWedLotto: { title: 'Mon & Wed Gold Lotto', image: require('./assets/monWedGoldLotto.png') },
  TattsLotto: { title: 'Sat Gold Lotto', image: require('./assets/satGoldLotto.png') },
  Powerball: { title: 'Powerball', image: require('./assets/powerball.png') },
  OzLotto: { title: 'Oz Lotto', image: require('./assets/ozLotto.png') },
};
