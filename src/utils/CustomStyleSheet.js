//@flow
import EStyleSheet from 'react-native-extended-stylesheet';
import type {EStyleSheet as EStyleSheetType} from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $backgroundColorSide: '#1b1b22',
  $backgroundColorCenter: '#242530',
  $containerColor: 'rgba(56, 72, 104, 0.7)',
  $whiteColor: '#fff',
  $blackColor: '#000'
});

const CustomStyleSheet: EStyleSheetType = styles => {
  return EStyleSheet.create(styles);
};
export default CustomStyleSheet;
