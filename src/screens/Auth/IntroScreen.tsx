import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import Text from '../../components/Base/Text';
import Button from '../../components/Base/Button';
import Colors from '../../theme/Colors';
import Images from '../../theme/Images';
import {BUTTON_THEME_TYPE} from '../../constants';

const {width} = Dimensions.get('window');
function IntroScreen(props: any) {
  const onMoveLogin = () => {
    props.navigation.navigate('Login');
  };

  const onStart = () => {};

  ////////////////////////////////////////////////////////////
  //////////////////// Heading Section ///////////////////////
  ////////////////////////////////////////////////////////////
  const _renderHeading = () => {
    return (
      <View style={styles.sectionHeading}>
        <Image source={Images.intro_bg} style={styles.photo} />
        <View style={styles.headingContent}>
          <Text size={12} extraBold style={{marginBottom: 5}}>
            WHERE MIGHT
          </Text>
          <Text size={40} extraBold>
            Your next
          </Text>
          <View style={styles.row}>
            <Text size={40} extraBold style={styles.textSip}>
              sip
            </Text>
            <Text size={40} extraBold>
              take you?
            </Text>
          </View>
          <Text size={15} style={{marginTop: 15}}>
            Get Ready to discover a world of drinks, connections, and adventure.
          </Text>
        </View>
      </View>
    );
  };

  ////////////////////////////////////////////////////////////
  //////////////////// Form Section //////////////////////////
  ////////////////////////////////////////////////////////////
  const _renderForm = (insets: any) => {
    return (
      <View style={[styles.form, {paddingBottom: insets.bottom}]}>
        <Button
          title="Get Started"
          theme={BUTTON_THEME_TYPE.PURPLE}
          onPress={onStart}
        />
        <Button
          title="Already a Member? Log in"
          theme={BUTTON_THEME_TYPE.WHITE}
          style={{marginTop: 16, marginBottom: 25}}
          onPress={onMoveLogin}
        />
        <Text textAlign="center" size={12} style={{marginBottom: 5}}>
          By continuing you agree with Sip Social’s
        </Text>
        <Text textAlign="center" size={12}>
          <Text semiBold underline>
            Terms of service
          </Text>{' '}
          and{' '}
          <Text semiBold underline>
            Privacy Policy.
          </Text>
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.page}>
      <SafeAreaInsetsContext.Consumer>
        {insets => (
          <View style={{flex: 1, paddingTop: insets?.top}}>
            {_renderHeading()}
            {_renderForm(insets)}
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
    alignItems: 'center',
  },
  photo: {
    width: width * 0.75,
    height: width * 0.75 * 1.29,
    resizeMode: 'contain',
  },
  headingContent: {
    paddingHorizontal: 23,
    width: '100%',
    marginTop: -width * 0.16,
  },
  row: {
    flexDirection: 'row',
  },
  textSip: {
    marginRight: 5,
    backgroundColor: Colors.orange,
    paddingHorizontal: 10,
    paddingBottom: 7,
    borderRadius: 25,
    overflow: 'hidden',
  },
  form: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 23,
    paddingTop: 42,
    paddingBottom: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

export default IntroScreen;
