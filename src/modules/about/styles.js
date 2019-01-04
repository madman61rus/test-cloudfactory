//@flow
import type EStyleSheet from 'react-native-extended-stylesheet';
import CustomStyleSheet from '../../utils/CustomStyleSheet';

export const styles: EStyleSheet = CustomStyleSheet({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: '1rem',
    color: '$whiteColor'
  }
});
