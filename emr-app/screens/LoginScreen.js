import React, { Component } from "react";
import {
  Alert,
  Button,
  TextInput,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity
} from "react-native";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountNumber: "",
      password: "",
      enteredPass: ""
    };
  }

  componentDidUpdate() {
    if (this.state.enteredPass == "TestPass") {
      this.props.navigation.navigate("Main");
    }
  }

  onLogin() {
    this.setState({enteredPass: this.state.password});
    this.props.navigation.navigate("Main");
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.loginLogo}
        />
        <TextInput
          value={this.state.accountNumber}
          onChangeText={accountNumber => this.setState({ accountNumber })}
          placeholder={"Account No."}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          placeholder={"Password"}
          secureTextEntry={true}
          style={styles.input}
        />

        <View style={styles.btnContainer}>
            <TouchableOpacity
                onPress={this.onLogin.bind(this)}
            >
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderBottomColor: "#C0C0C0",
    borderColor: "white",
    marginBottom: 10,
  },
  loginLogo: {
    marginBottom: 30
  },
  btnText: {
    color: "white",
    fontWeight: "bold"
  },
  btnContainer: {
    backgroundColor: "#c71920",
    height: 50,
    width: 100,
    alignContent: "center",
    justifyContent: "center",
    paddingLeft: 30,
    borderRadius: 7,
    borderWidth: 1,
    opacity: 0.9
  }
});