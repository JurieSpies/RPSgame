import React from 'react';
import { TextInput, View } from 'react-native';
import propTypes from 'prop-types';
import styles from './InputLine.style';

/**
 * InputLine (TextInput) used in the Create Profile Page.
 */
const InputLine = (props) => {
  const { placeholder, onChange } = props;
  return (
    <View style={styles.mainContainer}>
      <TextInput placeholder={placeholder} onChange={onChange} />
      <View style={styles.line} />
    </View>
  );
};

/* Prop Types */
InputLine.propTypes = {
  placeholder: propTypes.object.isRequired,
  onChange: propTypes.func.isRequired,
};

InputLine.defaultProps = {
  placeholder: '',
  onChange: () => {},
};

export default InputLine;
