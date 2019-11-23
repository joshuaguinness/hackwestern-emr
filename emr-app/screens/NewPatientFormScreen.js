import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';


export default class NewPatientFormScreen extends Component {

  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    // 
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.headerText}>
            <Text style={[{paddingTop: 40}, {fontSize: 20}]}>Western Medical Clinic</Text>
            <Text>1151 Richmond St, London, ON N6A 3K7</Text>
        </View>
      </View>
    );
  }
}

NewPatientFormScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e8',
  },
  headerText: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
