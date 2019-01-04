//@flow
import EStyleSheet from 'react-native-extended-stylesheet';
import type {EStyleSheet as EStyleSheetType} from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $backgroundColorSide: '#1b1b22',
  $backgroundColorCenter: '#242530',
  $containerColor: 'rgba(67,83,131, 0.1)',
  $whiteColor: '#fff',
  $blackColor: '#000',
  $alertContainerColor: '#B2BAB6'
});

const CustomStyleSheet: EStyleSheetType = styles => {
  return EStyleSheet.create(styles);
};
export default CustomStyleSheet;
