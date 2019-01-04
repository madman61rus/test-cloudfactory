//@flow
import type EStyleSheet from 'react-native-extended-stylesheet';
import CustomStyleSheet from '../../utils/CustomStyleSheet';

export const styles: EStyleSheet = CustomStyleSheet({
  container: {
    height: '100%',
    paddingTop: '2rem',
    backgroundColor: '$backgroundColorSide'
  },
  lineContainer: {
    marginVertical: '1rem',
    paddingLeft: '1rem'
  },
  lineText: {
    fontSize: '1rem',
    color: '$whiteColor',
    fontWeight: 'bold'
  }
});
