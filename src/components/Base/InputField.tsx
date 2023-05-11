import React, {LegacyRef} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  TextInputSubmitEditingEventData,
  NativeSyntheticEvent,
} from 'react-native';
import Text from './Text';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';

interface InputFieldProps {
  style?: any;
  type?: string;
  value?: string;
  data?: string[];
  error?: string;
  colorData?: any[];
  placeholder?: string;
  placeholderTextColor?: string;
  maxLength?: number | undefined;
  returnKeyType?: ReturnKeyTypeOptions | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  innerRef?: LegacyRef<TextInput> | undefined;
  autoFocus?: boolean | undefined;
  label?: string | undefined;
  hasSaveButton?: boolean;
  onSave?: (event: any) => void;
  onSubmitEditing?:
    | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
    | undefined;
  onChangeText?: (text: string) => void;
  onSelectAddress?: (text: string) => void;
  onSelect?: () => void;
}

const InputField = (props: InputFieldProps) => {
  return (
    <View style={[styles.container, props.style]}>
      {props.label && props.label.length > 0 && (
        <Text extraBold style={styles.textLabel}>
          {props.label}
        </Text>
      )}
      <View
        style={[
          styles.content,
          props.error && props.error.length > 0
            ? {borderColor: Colors.red}
            : {},
        ]}>
        <TextInput
          ref={props.innerRef}
          style={[
            styles.textInput,
            props.error && props.error.length > 0 ? {color: Colors.red} : {},
          ]}
          autoFocus={props.autoFocus}
          autoCapitalize={props.autoCapitalize}
          keyboardType={props.keyboardType}
          maxLength={props.maxLength}
          returnKeyType={props.returnKeyType}
          placeholder={props.placeholder}
          placeholderTextColor={
            props.placeholderTextColor
              ? props.placeholderTextColor
              : Colors.gray
          }
          value={props.value}
          onChangeText={props.onChangeText}
          onSubmitEditing={props.onSubmitEditing}
        />
      </View>
      {props.error && props.error.length > 0 && (
        <Text style={styles.errorText}>{props.error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 13,
  },
  textLabel: {
    color: 'black',
    fontSize: 11,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  content: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    paddingHorizontal: 10,
    height: 50,
  },
  icon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  textInput: {
    height: '100%',
    fontSize: 16,
    marginHorizontal: 5,
    width: '90%',
    color: 'black',
    fontFamily: Fonts.regular,
  },
  errorText: {
    fontSize: 12,
    marginTop: 6,
    marginLeft: 2,
    color: Colors.red,
  },
});

export default InputField;
