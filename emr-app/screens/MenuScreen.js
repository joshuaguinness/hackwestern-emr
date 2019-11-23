import React, { Component } from "react";
import {
  Alert,
  Button,
  TextInput,
  Dimensions,
  View,
  StyleSheet,
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Icon } from 'react-native-elements';

export default class MenuScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
    return (
      <View style={{ backgroundColor: "#e9e9e8", alignContent: "strech", flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
        <View style={{ backgroundColor: "#e9e9e8", marginTop: 160, alignContent: "strech", flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
          <Image
            source={require("../assets/images/logo-grey.png")}
            style={{ marginLeft: "15%" }}
          />
          <TouchableOpacity
            style={styles.customBtnBG1}
            onPress={() => {
              this.props.navigation.navigate("Patient Info", {
                state: {
                  errors: [],
                  id: "",
                  modalVisible: false,
                  objModalVisible: false,
                  name: "",
                  type: "Item",
                  structure: "Room",
                  cost: "",
                  totalNumber: 2
                }, photo64: null
              });
            }}
          >
            <View style={{ paddingTop: 25 }}>
              <Text
                style={[
                  styles.customBtnText,
                  { fontWeight: "bold", fontSize: 30 }
                ]}
              >
                Patient Info
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.customBtnBG1}
            onPress={() => {
              this.props.navigation.navigate("Patient Records", {
                state: {
                  errors: [],
                  id: "",
                  modalVisible: false,
                  objModalVisible: false,
                  name: "",
                  type: "Item",
                  structure: "Room",
                  cost: "",
                  totalNumber: 2
                }, photo64: null
              });
            }}
          >

            <View style={{ paddingTop: 25 }}>
              <Text
                style={[
                  styles.customBtnText,
                  { fontWeight: "bold", fontSize: 30 }
                ]}
              >
                Patient Records
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.customBtnBG1}
            onPress={() => {
              this.props.navigation.navigate("Contact Patient", {
                state: {
                  errors: [],
                  id: "",
                  modalVisible: false,
                  objModalVisible: false,
                  name: "",
                  type: "Item",
                  structure: "Room",
                  cost: "",
                  totalNumber: 2
                }, photo64: null
              });
            }}
          >
            <View style={{ paddingTop: 25 }}>
              <Text
                style={[
                  styles.customBtnText,
                  { fontWeight: "bold", fontSize: 30 }
                ]}
              >
                Contact Patient
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.customBtnBG1}
            onPress={() => {
              this.props.navigation.navigate("Set Reminder", {
                state: {
                  errors: [],
                  id: "",
                  modalVisible: false,
                  objModalVisible: false,
                  name: "",
                  type: "Item",
                  structure: "Room",
                  cost: "",
                  totalNumber: 2
                }, photo64: null
              });
            }}
          >
            <View style={{ paddingTop: 25 }}>
              <Text
                style={[
                  styles.customBtnText,
                  { fontWeight: "bold", fontSize: 30 }
                ]}
              >
                Set Reminder
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

MenuScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  customBtnText: {
    fontWeight: "400",
    textAlign: "center",
    paddingTop: "30%",
    color: "white"
  },
  customBtnBG1: {
    backgroundColor: "#c71920",
    opacity: 0.85,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "black",
    width: (Dimensions.get("window").width * 15) / 40,
    height: (Dimensions.get("window").width * 7) / 20,
    marginRight: "0%",
    marginLeft: "8%",
    marginTop: "8%",
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.8,
    shadowColor: "#8C8C8C",
  },
});