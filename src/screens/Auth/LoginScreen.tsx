import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import Text from '../../components/Base/Text';
import InputField from '../../components/Base/InputField';
import Button from '../../components/Base/Button';
import Colors from '../../theme/Colors';
import Images from '../../theme/Images';
import {BUTTON_THEME_TYPE} from '../../constants';

function LoginScreen() {
  const [mobileNumber, setMobileNumber] = useState({value: '', error: ''});

  const onLogin = () => {
    setMobileNumber({
      value: mobileNumber.value,
      error: 'The mobile number is not registered to any account',
    });
  };

  ////////////////////////////////////////////////////////////
  //////////////////// Heading Section ///////////////////////
  ////////////////////////////////////////////////////////////
  const _renderHeading = (insets: any) => {
    return (
      <View style={styles.sectionHeading}>
        <Image
          source={Images.symbol01}
          style={[styles.symbole1, {top: insets.top + 70}]}
        />
        <Image source={Images.symbol02} style={styles.symbole2} />
        <Text size={40} extraBold>
          Welcome back
        </Text>
        <View style={styles.row}>
          <Text size={40} extraBold>
            to
          </Text>
          <Text size={40} extraBold style={styles.textSip}>
            sip
          </Text>
          <Text size={40} extraBold>
            social
          </Text>
        </View>
        <Text size={15} style={{marginTop: 30}}>
          Enter your mobile number to login
        </Text>
      </View>
    );
  };
  ////////////////////////////////////////////////////////////
  ///////////////////// Form Section /////////////////////////
  ////////////////////////////////////////////////////////////
  const _renderForm = () => {
    return (
      <View style={styles.form}>
        <InputField
          label={'MOBILE NUMBER'}
          value={mobileNumber.value}
          keyboardType={'phone-pad'}
          error={mobileNumber.error}
          onChangeText={(text: string) => {
            setMobileNumber({value: text, error: ''});
          }}
        />
        <TouchableOpacity>
          <Text underline>Changed number? Contact Us</Text>
        </TouchableOpacity>
      </View>
    );
  };

  ////////////////////////////////////////////////////////////
  //////////////////// Footer Section ////////////////////////
  ////////////////////////////////////////////////////////////
  const _renderFooter = (insets: any) => {
    return (
      <View style={[styles.footer, {paddingBottom: insets.bottom}]}>
        <Button
          title="Login"
          theme={BUTTON_THEME_TYPE.PURPLE}
          onPress={onLogin}
        />
        <Text textAlign="center" size={12} style={{marginTop: 25}}>
          By continuing you will receive an SMS for verification. Message and
          data rates may apply
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.page}>
      <SafeAreaInsetsContext.Consumer>
        {insets => (
          <View style={{flex: 1, paddingTop: insets?.top}}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={{flex: 1}}>
              <ScrollView>
                {_renderHeading(insets)}
                {_renderForm()}
              </ScrollView>
            </KeyboardAvoidingView>
            {_renderFooter(insets)}
          </View>
        )}
      </SafeAreaInsetsContext.Consumer>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.page,
  },
  sectionHeading: {
    paddingTop: 50,
    alignItems: 'center',
  },
  symbole1: {
    position: 'absolute',
    left: 30,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  symbole2: {
    position: 'absolute',
    right: 100,
    top: 0,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
  },
  textSip: {
    marginHorizontal: 5,
    backgroundColor: Colors.purple,
    paddingHorizontal: 10,
    paddingBottom: 7,
    borderRadius: 25,
    overflow: 'hidden',
  },
  form: {
    marginTop: 48,
    paddingHorizontal: 23,
  },
  footer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    paddingHorizontal: 23,
    paddingTop: 42,
    paddingBottom: 15,
  },
});

export default LoginScreen;
