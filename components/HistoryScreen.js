import React from 'react';
import {
  Button,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

console.disableYellowBox = true;

class HistoryScreen extends React.Component {
  state = {
    flowers: {},
    Items: [],
    loading: false
  };
  static navigationOptions = {
    header: null
  };
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true });
    const response = await fetch(
      'https://amazing-flower-app.herokuapp.com/apiForAllFlowers?name=test'
    );
    const json = await response;
    const responseJson = await json.json();
    await this.setState({ loading: false, flowers: responseJson });
    //  console.log('Json:', responseJson);
    this.MapObject();
    this.setState({ loading: false });
  };

  MapObject = () => {
    Object.entries(this.state.flowers).map(([key, v]) => {
      this.setState({ Items: [...this.state.Items, v] });
    });
  };

  detailsScreen = item => {
    this.props.navigation.navigate('Details', {
      item: item
    });
  };

  renderItem = ({ item }) => {
    console.log('URI:', item.linkforimage.length);
    if (item.linkforimage.length > 15) {
      return (
        <TouchableOpacity
          onPress={() => this.detailsScreen(item)}
          style={{ marginTop: 10 }}
        >
          <Image style={{ height: 300 }} source={{ uri: item.linkforimage }} />
          <Text style={styles.name}>{item.title}</Text>
        </TouchableOpacity>
      );
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.Items && this.state.Items.length > 0 ? (
          <FlatList
            style={{ flex: 1 }}
            data={this.state.Items}
            renderItem={this.renderItem}
          />
        ) : (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#28D190" />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    fontSize: 25,
    position: 'absolute',
    left: 15,
    top: 235,
    color: '#fff',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#28D190',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#28D190'
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default HistoryScreen;
