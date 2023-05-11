import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Text from './Text';
import Colors from '../../theme/Colors';
import {BUTTON_THEME_TYPE} from '../../constants';

interface ButtonProps {
  style?: any;
  theme?: string;
  title: string;
  onPress?: () => void;
}

const Button = (props: ButtonProps) => {
  let backgroundColor = 'white';
  let textColor = 'black';

  if (props.theme === BUTTON_THEME_TYPE.PURPLE) {
    backgroundColor = Colors.purple;
    textColor = 'white';
  }

  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor}, props.style]}
      onPress={props.onPress}>
      <Text color={textColor} size={16} semiBold>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 1,
    shadowRadius: 0,
  },
});

export default Button;
