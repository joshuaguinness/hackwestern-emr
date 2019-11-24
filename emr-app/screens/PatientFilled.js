import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
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
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

var radio_props = [
  { label: 'Text', value: 0 },
  { label: 'Voice', value: 1 }
];


export default class PatientFilled extends Component {

  constructor() {
    super();
    this.state = {
      lastName: "",
      firstName: "",
      sex: ""
    };
  }

  componentDidMount() {
    // 
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginLeft: 30, marginTop: 40, width: 70, height: 30 }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Menu");
            }}
          >
            <View>
              <Text
                style={[
                  { fontWeight: "bold", fontSize: 16, color: "black" }
                ]}
              >
                Back
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.headerText}>
          <Text style={[{ paddingTop: 40 }, { fontSize: 20 }]}>Western Medical Clinic</Text>
          <Text style={[{ paddingBottom: 20 }]}>1151 Richmond St, London, ON N6A 3K7</Text>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <View style={styles.formHeaderSection}>
            <Text style={styles.formHeaderText}>Patient Information</Text>
          </View>

          {/* Name & Sex*/}
          <View style={styles.formContainer}>
            <View style={[styles.formCell, { width: "42%" }]}>
              <Text style={{ fontWeight: "bold" }}>Last Name:</Text>
            </View>
            <View style={[styles.formCell, { width: "42%" }]}>
              <Text style={{ fontWeight: "bold" }}>First Name:</Text>
            </View>
            <View>
              <Text style={{ fontWeight: "bold", paddingLeft: 5 }}>Sex:</Text>
            </View>
          </View>

          {/* Address */}
          <View style={styles.formContainer}>
            <Text style={{ fontWeight: "bold", paddingLeft: 5 }}>Address:</Text>
          </View>
          <View style={styles.formContainer}>
            <View style={[styles.formCell, { width: "33%" }]}>
              <Text style={{ fontWeight: "bold" }}>City:</Text>
            </View>
            <View style={[styles.formCell, { width: "33%" }]}>
              <Text style={{ fontWeight: "bold" }}>Province:</Text>
            </View>
            <View>
              <Text style={{ fontWeight: "bold", paddingLeft: 5 }}>Postal Code:</Text>
            </View>
          </View>

          {/* Birthday and Health Card No. */}
          <View style={styles.formContainer}>
            <View style={[styles.formCell, { width: "50%" }]}>
              <Text style={{ fontWeight: "bold" }}>Birth Date:</Text>
            </View>
            <View>
              <Text style={{ fontWeight: "bold", paddingLeft: 5 }}>Health Card No.:</Text>
            </View>
          </View>

          {/* Phone Number and Occupation */}
          <View style={styles.formContainer}>
            <View style={[styles.formCell, { width: "33%" }]}>
              <Text style={{ fontWeight: "bold" }}>Home Phone:</Text>
            </View>
            <View style={[styles.formCell, { width: "33%" }]}>
              <Text style={{ fontWeight: "bold" }}>Cell Phone:</Text>
            </View>
            <View>
              <Text style={{ fontWeight: "bold", paddingLeft: 5 }}>Occupation:</Text>
            </View>
          </View>

          {/* */}
          {/* <View style={styles.formHeaderSection}>
                <Text style={[styles.formHeaderText, {borderTopColor: "#bcbcbc"}]}>Emergency Contact Information</Text>
            </View> */}

        </View>
      </View>
    );
  }
}

PatientFilled.navigationOptions = {
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
    borderTopColor: "#e9e9e8",
    borderColor: "black",
    height: 25
  },
  formCell: {
    borderRightColor: "black",
    borderTopColor: "#e9e9e8",
    borderBottomColor: "#e9e9e8",
    borderLeftColor: "#e9e9e8",
    paddingLeft: 5,
    borderWidth: 1
  },
});
