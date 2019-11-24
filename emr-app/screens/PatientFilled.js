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
      array: ["Last Name:  ", "First Name:  ", "Sex:  ", "Address:  ", "City:  ", "Province:  ", "Postal Code:  ", "Birth Date:  ",
      "Health Card No.:  ", "Phone Number:  ", "Email:  ", "Occupation:  ", "Full Name:  ", "Relationship:  ", "Phone Number:  ", "Risk Factors:  ", "Allergies:  "],
      array2: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    };
  }

  componentDidMount() {
    // 
  }

  render() {
    return (

      <View style={[styles.container]}>
        <View style={{ marginHorizontal: 10 }}>
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
        <View>
          <View style={styles.formHeaderSection}>
            <Text style={styles.formHeaderText}>Patient Information</Text>
          </View>
        </View>

          {/* Name & Sex*/}
          <View style={styles.formContainer}>
            <View style={[styles.formCell, { width: "42%" }]}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Last Name:  </Text>
                <Text>{this.state.array2[0]}</Text>
              </Text>
            </View>
            <View style={[styles.formCell, { width: "42%" }]}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>First Name:  </Text>
                <Text>{this.state.array2[1]}</Text>
              </Text>
            </View>
            <View>
              <Text>
                <Text style={{ fontWeight: "bold", paddingLeft: 5 }}> Sex: </Text>
                <Text>{this.state.array2[3]}</Text>
              </Text>
            </View>
          </View>

          {/* Address */}
          <View style={styles.formContainer}>
            <Text>
              <Text style={{ fontWeight: "bold", paddingLeft: 5 }}>  Address:  </Text>
              <Text>{this.state.array2[4]}</Text>
            </Text>
          </View>
          <View style={styles.formContainer}>
            <View style={[styles.formCell, { width: "33%" }]}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>City:  </Text>
                <Text>{this.state.array2[5]}</Text>
              </Text>
            </View>
            <View style={[styles.formCell, { width: "33%" }]}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Province:  </Text>
                <Text>{this.state.array2[6]}</Text>
              </Text>
            </View>
            <View>
              <Text>
                <Text style={{ fontWeight: "bold", paddingLeft: 5 }}> Postal Code:  </Text>
                <Text>{this.state.array2[7]}</Text>
              </Text>
            </View>
          </View>

          {/* Birthday and Health Card No. */}
          <View style={styles.formContainer}>
            <View style={[styles.formCell, { width: "50%" }]}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Birth Date:  </Text>
                <Text>{this.state.array2[8]}</Text>
              </Text>
            </View>
            <View>
              <Text>
                <Text style={{ fontWeight: "bold", paddingLeft: 5 }}> Health Card No.:  </Text>
                <Text>{this.state.array2[9]}</Text>
              </Text>
            </View>
          </View>

          {/* Phone Number and Occupation */}
          <View style={styles.formContainer}>
            <View style={[styles.formCell, { width: "33%" }]}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Phone:  </Text>
                <Text>{this.state.array2[10]}</Text>
              </Text>
            </View>
            <View style={[styles.formCell, { width: "33%" }]}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Email:  </Text>
                <Text>{this.state.array2[11]}</Text>
              </Text>
            </View>
            <View>
              <Text>
                <Text style={{ fontWeight: "bold", paddingLeft: 5 }}> Occupation:  </Text>
                <Text>{this.state.array2[12]}</Text>
              </Text>
            </View>
          </View>

          {/* Emergency contact */}
          <View style={[styles.formHeaderSection, { borderTopColor: "#bcbcbc" }]}>
            <Text style={[styles.formHeaderText]}>Emergency Contact Information</Text>
          </View>
          <View style={styles.formContainer}>
            <Text>
              <Text style={{ fontWeight: "bold", paddingLeft: 5 }}>  Full Name:  </Text>
              <Text>{this.state.array2[13]}</Text>

            </Text>
          </View>
          <View style={styles.formContainer}>
            <View style={[styles.formCell, { width: "50%" }]}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Relationship:  </Text>
                <Text>{this.state.array2[14]}</Text>
              </Text>
            </View>
            <View>
              <Text>
                <Text style={{ fontWeight: "bold", paddingLeft: 5 }}> Phone:  </Text>
                <Text>{this.state.array2[15]}</Text>
              </Text>
            </View>
          </View>

          <View style={[styles.formHeaderSection, { borderTopColor: "#bcbcbc" }]}>
            <Text style={[styles.formHeaderText]}>Risk Factors</Text>
          </View>

          <View style={[styles.formContainer, { height: 200 }]}>
            <View>
              <Text style={{ paddingLeft: 5 }}></Text>
              <Text>{this.state.array2[16]}</Text>
            </View>
          </View>

          <View style={[styles.formHeaderSection, { borderTopColor: "#bcbcbc" }]}>
            <Text style={[styles.formHeaderText]}>Allergies</Text>
          </View>
          <View style={[styles.formContainer, { height: 200 }]}>
            <Text style={{ paddingLeft: 5 }}></Text>
            <Text>{this.state.array2[17]}</Text>
          </View>
          
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
