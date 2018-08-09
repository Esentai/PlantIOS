import React from 'react';
import {
  Button,
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  StyleSheet,
  ImageBackground,
  AsyncStorage
} from 'react-native';

import { Card } from 'react-native-elements';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  async componentDidMount() {
    try {
      await AsyncStorage.setItem('isFirstLaunch', '1');
    } catch (error) {
      console.log(error);
    }
  }

  _renderItem({ item, index }) {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center'
        }}
      >
        <StatusBar backgroundColor="blue" barStyle="dark-content" />
        <Card style={{ backgroundColor: '#eaeaeaeaea' }} title="Растения дня">
          <Image
            style={styles.image}
            source={{
              uri:
                'http://komnatnie-rasteniya.ru/wp-content/uploads/2018/01/504ed87e064e9af9ddc2e07d04d81e7e.jpg'
            }}
          />
          <Text style={styles.title}>
            Единственный в мире кактусовый сад под открытым небом можно посетить
            в Монте-Карло.
          </Text>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: '#000',
    marginTop: 10,
    textAlign: 'center'
  },
  image: {
    height: 230,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default HomeScreen;
