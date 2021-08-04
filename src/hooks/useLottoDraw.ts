import { useQuery } from 'react-query';
import { LottoDraw } from '../types';
import axios from 'axios';

const lottoUrl = 'https://data.api.thelott.com/sales/vmax/web/data/lotto/opendraws';
interface Response {
  Draws: LottoDraw[];
}

const getLottoDraw = () => {
  return axios.post<Response>(lottoUrl, {
    CompanyId: 'Tattersalls',
    MaxDrawCount: 16,
    OptionalProductFilter: ['Ozlotto', 'Powerball', 'TattsLotto', 'MonWedLotto'],
  });
};

export const useLottoDraw = () => {
  return useQuery('lottoDraw', getLottoDraw);
};
