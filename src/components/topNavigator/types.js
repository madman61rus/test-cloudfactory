//@flow
import type EStyleSheet from 'react-native-extended-stylesheet';

export type Props = {
  containerStyle: EStyleSheet,
  leftIconName: string,
  onLeftIconPress: () => void,
  leftIconSize: number,
  leftIconColor: string,
  rightIconName: string,
  onRightIconPress: () => void,
  rightIconSize: number,
  rightIconColor: string,
  titleText: string,
  titleStyle: EStyleSheet
};
