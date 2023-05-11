import React from 'react';
import {Text as NativeText, StyleSheet} from 'react-native';
import Fonts from '../../theme/Fonts';

interface TextProps {
  style?: any;
  children: any;
  fontFamily?: string;
  underline?: boolean;
  black?: boolean;
  bold?: boolean;
  semiBold?: boolean;
  extraBold?: boolean;
  light?: boolean;
  thin?: boolean;
  numberOfLines?: number;
  textAlign?: string;
  color?: string;
  size?: number;
  letterSpacing?: number;
  onPress?: () => void;
}

const Text = (props: TextProps) => {
  let fontFamily = props.fontFamily ? props.fontFamily : Fonts.regular;
  if (props.black) {
    fontFamily = Fonts.black;
  } else if (props.bold) {
    fontFamily = Fonts.bold;
  } else if (props.extraBold) {
    fontFamily = Fonts.extraBold;
  } else if (props.semiBold) {
    fontFamily = Fonts.semiBold;
  } else if (props.light) {
    fontFamily = Fonts.light;
  } else if (props.thin) {
    fontFamily = Fonts.thin;
  }

  return (
    <NativeText
      numberOfLines={props.numberOfLines}
      style={[
        styles.text,
        {
          textAlign: props.textAlign,
          fontFamily,
          ...(props.color && {color: props.color}),
          ...(props.size && {fontSize: props.size}),
          ...(props.letterSpacing && {letterSpacing: props.letterSpacing}),
          ...(props.underline && {textDecorationLine: 'underline'}),
        },
        props.style,
      ]}
      onPress={props.onPress}>
      {props.children}
    </NativeText>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});

export default Text;
