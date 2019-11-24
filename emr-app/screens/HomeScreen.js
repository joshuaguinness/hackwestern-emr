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
import axios from 'axios';


export default class HomeScreen extends Component {

  constructor() {
    super();
    this.state = {
      serverData: [],
      //Data Source for the SearchableDropdown
    };
  }

  componentWillUnmount() {
    
  }
  
  _getPatientList(){
    axios.get("https://hackwestern-emr.herokuapp.com/api/patients/getAllPatientNames")
      .then(res => {
        this.setState({serverData: res.data});
      })
      .catch(error => {
        console.log(error);
      });
  }

  _renderAddPatientBtn(){
    return(
      <View style={styles.addBtnContainer}>
        <View style={styles.addBtn}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("NewPatient");
            }}
          >
            <View>
              <Text style={styles.addBtnText}>Add New Patient</Text>
            </View>           
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={require("../assets/images/logo-grey.png")}
          />
        </View>
        <View style={styles.searchBar}>
          <Text style={styles.searchBarText}>Find a patient:</Text>
          <SearchableDropdown
            onTextChange={(text) =>  console.log(text)}
            onItemSelect={(item) =>  alert(JSON.stringify(item))}
            containerStyle={{
              padding: 5
            }}
            textInputStyle={{
              padding: 12,
              borderWidth: 2,
              borderColor: 'black',
              borderRadius: 5,
              backgroundColor: 'white',
              fontSize: 14
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: 'white',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius:5
            }}
            itemTextStyle={{
              color: '#222'
            }}
            itemsContainerStyle={{
              maxHeight: "85.9%",
              paddingTop: 2,
            }}
            items={this.state.serverData}
            placeholder="Enter Patient Name"
            resetValue={true}
            underlineColorAndroid='transparent'
          />
          {this._renderAddPatientBtn()}
          {this._getPatientList()}
        </View>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e8',
  },
  logo: {
    marginLeft: "18%",
    marginTop: "20%",
    justifyContent: 'center',
  },
  searchBarText: {
    marginLeft: 8,
    fontSize: 28,
    fontWeight: "bold",
    color: "#c71920"
  },
  searchBar: {
    width: "80%",
    marginLeft: "10%",
    marginTop: "7%"
  },
  addBtn: {
    backgroundColor: "#c71920",
    borderWidth: 2,
    borderRadius: 10,
    height: 100,
    width: "60%",
    justifyContent: "center",
    marginLeft: "18%",
    paddingLeft: "12.5%",
    opacity: 0.9
  },
  addBtnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30
  },
  addBtnContainer: {
    marginTop: "50%"
  }
});
