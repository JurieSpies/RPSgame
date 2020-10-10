import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../common/constants/colors';
import { scale } from '../../common/constants/style';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  backgroundImage: {
    flex: 1,
    marginHorizontal: scale(30),
  },
});
export default styles;
