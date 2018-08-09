import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  AsyncStorage,
  View,
  ImageBackground
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { StackActions, NavigationActions } from 'react-navigation';

export default class OnboardingScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  navigateScreen = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'MainStack' })]
    });
    this.props.navigation.dispatch(resetAction);
  };

  onDone = () => {
    this.navigateScreen();
  };
  onSkip = () => {
    this.navigateScreen();
  };
  render() {
    return (
      <Onboarding
        onDone={this.onDone}
        onSkip={this.onSkip}
        pages={[
          {
            backgroundColor: '#28D190',
            image: (
              <ImageBackground
                style={styles.imgBackground}
                resizeMode="cover"
                source={require('../Images/FrameFirstPage.png')}
              />
            ),
            title: (<Text></Text>),
            subtitle: (<Text></Text>)
          },
          {
            backgroundColor: '#28D190',
            image: (
              <ImageBackground
                style={styles.imgBackground}
                resizeMode="cover"
                source={require('../Images/FrameSecondPage.png')}
              />
            ),
            title: (<Text></Text>),
            subtitle: (<Text></Text>)
          }
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  imgBackground: {
    width: '100%',
    height: '100%',
    top: 14
  }
});
