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
import * as FileSystem from 'expo-file-system';
import SearchableDropdown from 'react-native-searchable-dropdown';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import * as Permissions from 'expo-permissions';
import { Audio } from 'expo-av';

var radio_props = [
  { label: 'Text', value: 0 },
  { label: 'Voice', value: 1 }
];

const recordingOptions = {
  // android not currently in use, but parameters are required
  android: {
    extension: '.m4a',
    outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
    audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
    sampleRate: 44100,
    numberOfChannels: 2,
    bitRate: 128000,
  },
  ios: {
    extension: '.wav',
    audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
    sampleRate: 44100,
    numberOfChannels: 1,
    bitRate: 128000,
    linearPCMBitDepth: 16,
    linearPCMIsBigEndian: false,
    linearPCMIsFloat: false,
  },
};

export default class NewPatientFormScreen extends Component {
  constructor() {
    super();
    this.state = {
      array: ["Last Name:  ", "First Name:  ", "Sex:  ", "Address:  ", "City:  ", "Province:  ", "Postal Code:  ", "Birth Date:  ",
        "Health Card No.:  ", "Phone Number:  ", "Email:  ", "Occupation:  ", "Full Name:  ", "Relationship:  ", "Phone Number:  ", "Risk Factors:  ", "Allergies:  "],
      array2: ["*", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      curIndex: 0,
      done: false,
      recording: null
    };
  }

  componentDidMount() {
    // 
  }

  async startRecording() {
    const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    if (status !== 'granted') return;
    console.log("sir");
    this.setState({ isRecording: true });
    // some of these are not applicable, but are required
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: true,
      staysActiveInBackground: false
    });
    const recording = new Audio.Recording();
    try {
      await recording.prepareToRecordAsync(recordingOptions);
      await recording.startAsync();
    } catch (error) {
      console.log(error);
      this.stopRecording();
    }
    this.recording = recording;
    console.log(this.recording.getURI());
  }

  async getTranscription() {
    this.setState({ isFetching: true });
    try {
      const info = await FileSystem.getInfoAsync(this.recording.getURI());
      console.log(`FILE INFO: ${JSON.stringify(info)}`);
      const uri = info.uri;
      const formData = new FormData();
      formData.append('file', {
        uri,
        type: 'audio/x-wav',
        // could be anything 
        name: 'speech2text'
      });
      console.log(`FORMDATA INFO: ${JSON.stringify(formData)}`);

      const response = await fetch("https://us-central1-hackthe6-emr-1574519352014.cloudfunctions.net/audioToText", {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      this.setState({ query: data.transcript });

      let valueArray = this.state.array2;
      console.log(this.state.array2);

      valueArray[this.state.curIndex] = data.transcript;
      this.setState({ array2: valueArray });

      console.log(data.transcript);
    } catch (error) {
      console.log('There was an error', error);
      this.stopRecording();
      this.resetRecording();
    }
    this.setState({ isFetching: false });
  }

  stopRecording = async () => {
    this.setState({ isRecording: false });
    try {
      await this.recording.stopAndUnloadAsync();
    } catch (error) {
      // Do nothing -- we are already unloaded.
    }
  }

  handleOnPressIn = () => {
    this.startRecording();
  }

  handleOnPressOut = () => {
    this.stopRecording();
    this.getTranscription();
  }

  handlQueryChange = (query) => {
    this.setState({ query });
  }

  deleteRecordingFile = async () => {
    console.log("Deleting file");
    try {
      const info = await FileSystem.getInfoAsync(this.recording.getURI());
      await FileSystem.deleteAsync(info.uri)
    } catch (error) {
      console.log("There was an error deleting recording file", error);
    }
  }

  resetRecording = () => {
    this.deleteRecordingFile();
    this.recording = null;
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
                <Text style={{ fontWeight: "bold", paddingLeft: 5 }}>Sex: </Text>
                <Text>{this.state.array2[3]}</Text>
              </Text>
            </View>
          </View>

          {/* Address */}
          <View style={styles.formContainer}>
            <Text>
              <Text style={{ fontWeight: "bold", paddingLeft: 5 }}>Address:  </Text>
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
                <Text style={{ fontWeight: "bold", paddingLeft: 5 }}>Postal Code:  </Text>
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
                <Text style={{ fontWeight: "bold", paddingLeft: 5 }}>Health Card No.:  </Text>
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
                <Text style={{ fontWeight: "bold", paddingLeft: 5 }}>Occupation:  </Text>
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
              <Text style={{ fontWeight: "bold", paddingLeft: 5 }}>Full Name:  </Text>
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
                <Text style={{ fontWeight: "bold", paddingLeft: 5 }}>Phone:  </Text>
                <Text>{this.state.array2[15]}</Text>
              </Text>
            </View>
          </View>

          <View style={[styles.formHeaderSection, { borderTopColor: "#bcbcbc" }]}>
            <Text style={[styles.formHeaderText]}>Risk Factors</Text>
          </View>

          <View style={[styles.formContainer, { height: 70 }]}>
            <View>
              <Text style={{ paddingLeft: 5 }}></Text>
              <Text>{this.state.array2[16]}</Text>
            </View>
          </View>

          <View style={[styles.formHeaderSection, { borderTopColor: "#bcbcbc" }]}>
            <Text style={[styles.formHeaderText]}>Allergies</Text>
          </View>
          <View style={[styles.formContainer, { height: 70 }]}>
            <Text style={{ paddingLeft: 5 }}></Text>
            <Text>{this.state.array2[17]}</Text>
          </View>

        </View>
        <View style={{ marginLeft: "5%", marginTop: "10%" }}>
          <RadioForm
            radio_props={radio_props}
            initial={0}
            onPress={type => {
              type === 1
                ? this.setState({ type: "Structure" })
                : this.setState({ type: "Item" });
            }}
          />
        </View>

        <View>
          <TouchableOpacity
            style={styles.sendInfo}
            onPress={() => {
              this.setState({ curIndex: this.state.curIndex - 1 });
            }}
          >
            <View style={{ marginTop: 20, alignItems: "center" }}>
              <Text>
                Previous
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.sendInfo}
            onPressIn={this.handleOnPressIn}
            onPressOut={this.handleOnPressOut}
          >
            <View style={{ marginTop: 20, alignItems: "center" }}>
              <Text>
                Record
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.sendInfo}
            onPress={() => {
              let theArray = this.state.array2;
              theArray[this.state.curIndex + 1] = "*"
              this.setState({ curIndex: this.state.curIndex + 1, array2: theArray });
              if (this.state.curIndex < this.state.array2.length) {
                this.setState({ curIndex: this.state.curIndex + 1 })
              }
              else {
                this.setState({ done: true })
              }
            }}
          >
            <View style={{ marginTop: 20, alignItems: "center" }}>
              <Text>
                Next
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {(this.state.done === true) ?
          <View>
            <TouchableOpacity
              style={styles.sendInfo}
              onPress={() => {

              }}
            >
              <View style={{ marginTop: 20, alignItems: "center" }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Done
              </Text>
              </View>
            </TouchableOpacity>
          </View>
          :
          null
        }
      </View >
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
  sendInfo: {
    backgroundColor: "#BCBCBC",
    opacity: 0.85,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "black",
    width: (Dimensions.get("window").width * 4) / 20,
    height: (Dimensions.get("window").width * 3) / 40,
    marginRight: "0%",
    marginLeft: "8%",
    marginTop: "3%",
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.8,
    shadowColor: "#8C8C8C",
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
