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
            <Text style={[{paddingBottom: 20}]}>1151 Richmond St, London, ON N6A 3K7</Text>
        </View>
        <View style={{marginHorizontal: 10}}>
            <View style={styles.formHeaderSection}>
                <Text style={styles.formHeaderText}>Patient Information</Text>
            </View>
            {/* First column*/}
            <View style={styles.formContainer}>
                <View style={styles.formCell}>
                    <Text>First Name:</Text>
                </View>
                <View>
                    <Text>Last Name:</Text>
                </View>
            </View>
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
  },
  formHeaderSection: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#bcbcbc",
    height: 25,
    borderWidth: 1,
    borderColor: "black"
  },
  formHeaderText: {
    fontSize: 15,
    fontWeight: "bold"
  },
  formContainer: {
      flexDirection: "row",
      borderWidth: 1,
      borderColor: "black",
      height: 25
  },
  formCell: {
      borderRightColor: "black",
      borderWidth: 1
  }
});
