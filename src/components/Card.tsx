import * as React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { LottoDraw, productIdMapper } from '../types';
import { format } from 'date-fns';

export const CARD_TEST_IDS = {
  CONTAINER: 'Card Container View',
  AMOUNT_TEXT: 'Card Amount Text',
};
interface Props {
  item: LottoDraw;
}
const Card: React.FC<Props> = ({ item }) => {
  const amount = new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(item.Div1Amount);
  return (
    <View style={styles.container} testID={CARD_TEST_IDS.CONTAINER}>
      <View>
        <Text style={styles.titleText}>{productIdMapper[item.ProductId].title}</Text>
        <Text style={styles.drawText}>Draw {item.DrawNumber}</Text>
        <Text style={styles.normalText}>{format(new Date(item.DrawDate), 'EEE, d MMM yyyy')}</Text>
        <Text testID={CARD_TEST_IDS.AMOUNT_TEXT}>
          {item.IsDiv1Unknown ? 'Unknown' : item.IsDiv1Estimated ? `${amount} (estimate)` : amount}
        </Text>
      </View>
      <Image style={styles.productLogo} source={productIdMapper[item.ProductId].image as ImageSourcePropType} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 100,
    backgroundColor: '#fff',
    marginTop: 32,
    padding: 24,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productLogo: {
    height: 75,
    width: 75,
  },
  titleText: {
    marginBottom: 8,
    fontSize: 18,
    fontWeight: '600',
  },
  drawText: {
    marginBottom: 2,
    fontSize: 14,
    fontWeight: '600',
  },
  normalText: {
    marginBottom: 2,
    fontSize: 14,
    fontWeight: '400',
  },
});

export default Card;
