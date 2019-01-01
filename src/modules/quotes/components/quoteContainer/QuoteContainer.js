//@flow
import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const QuoteContainer = (props: Props) => {
  const [key, value] = props.item.item;
  return (
    <View style={styles.container}>
      <View style={[styles.pairContainer, {alignItems: 'flex-start'}]}>
        <Text style={styles.pairTitleText}>{key.replace('_', '/')}</Text>
      </View>
      <View style={styles.pairContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.describeText}>lowestAsk: </Text>
          <Text style={styles.pairBidsText}>{value.lowestAsk}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.describeText}>highestBid: </Text>
          <Text style={styles.pairBidsText}>{value.highestBid}</Text>
        </View>
      </View>
      <View style={[styles.pairContainer, {alignItems: 'flex-end'}]}>
        <Text
          style={[styles.percentText, {color: +value.percentChange >= 0 ? '#2EC4B6' : '#E71D36'}]}
        >
          {value.percentChange}
        </Text>
      </View>
    </View>
  );
};

export default QuoteContainer;
