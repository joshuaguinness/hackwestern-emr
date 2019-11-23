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

var  items  = [
	{
		id: 1,
		name: 'Javascript'
	},
	{
		id: 2,
		name: 'Java'
	},
	{
		id: 3,
		name: 'Ruby'
	},
	{
		id: 4,
		name: 'React Native'
	},
	{
		id: 5,
		name: 'PHP'
	},
	{
		id: 6,
		name: 'Python'
	},
	{
		id: 7,
		name: 'Go'
	},
	{
		id: 8,
		name: 'Swift'
	},
];


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require("../assets/images/logo-grey.png")}
        />
      </View>
      <View>
        <Text>Hello</Text>
        <SearchableDropdown
          onTextChange={(text) =>  alert(text)}
          onItemSelect={(item) =>  alert(JSON.stringify(item))}
          containerStyle={{
            padding: 5
          }}
          textInputStyle={{
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5
          }}
          itemStyle={{
            padding: 10,
              marginTop: 2,
            backgroundColor: '#ddd',
            borderColor: '#bbb',
            borderWidth: 1,
            borderRadius:5
          }}
          itemTextStyle={{
          color: '#222'
          }}
          itemsContainerStyle={{
            maxHeight: 140
          }}
          items={items}
          placeholder="Placeholder."
          resetValue={false}
          underlineColorAndroid='transparent'
        />
      </View>
    </View>
  );
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
    marginLeft: "22.5%",
    marginTop: "7%",
    justifyContent: 'center',
  }
});
