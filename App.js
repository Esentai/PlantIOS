import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import {
  createStackNavigator,
  createBottomTabNavigator,
  SwitchNavigator,
  AsyncStorage
} from 'react-navigation'; // Version can be specified in package.json

import StartScreen from './components/StartScreen';
import OnboardingScreen from './components/OnboardingScreen';
import HomeScreen from './components/HomeScreen';
import CameraScreen from './components/CameraScreen';
import HistoryScreen from './components/HistoryScreen';
import DetailsScreen from './components/DetialsScreen';

console.disableYellowBox = true;

const status = false;

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen }
});

const Camera = createStackNavigator({
  Camera: { screen: CameraScreen },
  Details: { screen: DetailsScreen }
});

const Library = createStackNavigator({
  Library: { screen: HistoryScreen },
  Details: { screen: DetailsScreen }
});

const TabNav = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Camera: { screen: Camera },
    Library: { screen: Library }
  },
  {
    navigationOptions: ({ navigation }) => ({
      header: null,
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Camera') {
          iconName = `ios-camera${focused ? '' : '-outline'}`;
        } else if (routeName === 'Library') {
          iconName = `ios-list-box${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#28D190',
      inactiveTintColor: 'gray'
    },
    header: null,
    animationEnabled: false,
    swipeEnabled: false
  }
);

const Router = createStackNavigator(
  {
    Start: { screen: StartScreen },
    Onboarding: { screen: OnboardingScreen },
    MainStack: { screen: TabNav }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

export default Router;
