import React from 'react';
import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import propTypes from 'prop-types';
import styles from './Button.style';

/**
 * Button used throughout the app.
 */
const Button = (props) => {
  const { title, loading, onPress, style, kind } = props;
  return (
    <TouchableOpacity onPress={onPress} disabled={loading}>
      <View style={[style.container || styles.container, styles[kind]]}>
        {!loading && <Text style={style.text || styles.text}>{title}</Text>}
        {loading && <ActivityIndicator />}
        {loading && (
          <View style={style.loadingContainer || styles.loadingContainer} />
        )}
      </View>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  /**
   * Function to execute on the press of the button.
   */
  onPress: propTypes.func,
  /**
   * Title to display on the button.
   */
  title: propTypes.string,
  /**
   * Color theme that the button should adapt.
   */
  kind: propTypes.string,
  /**
   * Styles to apply to the button.
   */
  style: propTypes.object,
  /**
   * Block the button and display activity indicator
   */
  loading: propTypes.bool,
};

Button.defaultProps = {
  onPress: () => console.log('I was pressed'),
  title: 'Press me',
  style: styles,
  loading: false,
};

export default Button;
