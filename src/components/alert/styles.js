//@flow
import type EStyleSheet from 'react-native-extended-stylesheet';
import CustomStyleSheet from '../../utils/CustomStyleSheet';

export const styles: EStyleSheet = CustomStyleSheet({
  container: {
    backgroundColor: '$alertContainerColor',
    width: '70%',
    borderRadius: '0.3rem',
    paddingVertical: '0.3rem',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: '$blackColor',
    fontSize: '1rem'
  }
});
