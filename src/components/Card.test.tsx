import * as React from 'react';
import { render } from '@testing-library/react-native';
import Card, { CARD_TEST_IDS } from './Card';
import { LottoDraw } from '../types';

const mockData: LottoDraw = {
  ProductId: 'Powerball',
  DrawNumber: 1316,
  DrawDisplayName: 'Powerball $60,000,000',
  DrawDate: '2021-08-05T00:00:00',
  DrawLogoUrl: 'http://media.tatts.com/TattsServices/Lotto/Products/Powerball_v1.png',
  DrawType: 'Jackpot',
  Div1Amount: 60000000.0,
  IsDiv1Estimated: false,
  IsDiv1Unknown: true,
  DrawCloseDateTimeUTC: '2021-08-05T09:35:00',
  DrawEndSellDateTimeUTC: '2021-08-05T09:30:00',
  DrawCountDownTimerSeconds: 76732.0,
};

describe('Card', () => {
  const createComponent = () => render(<Card item={mockData} />);
  it('should render the card', () => {
    const { getByTestId } = createComponent();
    expect(getByTestId(CARD_TEST_IDS.CONTAINER).type).toBe('View');
  });

  it('should show unknown jackpot amount', () => {
    const { getByTestId } = createComponent();
    expect(getByTestId(CARD_TEST_IDS.AMOUNT_TEXT).type).toBe('Text');
    expect(getByTestId(CARD_TEST_IDS.AMOUNT_TEXT).children).toStrictEqual(['Unknown']);
  });
});
