//@flow
import type EStyleSheet from 'react-native-extended-stylesheet';
import CustomStyleSheet from '../../utils/CustomStyleSheet';

export const styles: EStyleSheet = CustomStyleSheet({
  container: {
    backgroundColor: '#000',
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  titleText: {
    color: '$whiteColor',
    fontSize: '1rem'
  }
});
