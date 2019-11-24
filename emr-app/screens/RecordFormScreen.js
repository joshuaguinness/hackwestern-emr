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
import Signature from 'react-native-signature-canvas';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

var radio_props = [
    { label: 'Text', value: 0 },
    { label: 'Voice', value: 1 }
];


export default class RecordFormScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { signature: null };
    }

    handleSignature = signature => {
        this.setState({ signature });
    };

    handleEmpty = () => {
        console.log('Empty');
    }

    render() {
        const style = `.m-signature-pad--footer
    .button {
      background-color: red;
      color: #FFF;
    }`;
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
                    <Text>1151 Richmond St, London, ON N6A 3K7</Text>
                </View>

                <View style={{
                    borderColor: "black", backgroundColor: "#BCBCBC", width: "95%", borderWidth: 0.5, marginLeft: "2.5%", marginTop: 20
                }}>
                    < Text style={{ fontSize: 20, textAlign: "center" }}>
                        Patient Health and Medical History
                    </Text>
                    <Text style={{ fontSize: 14 }}>
                        (Ongoing problems, past illnesses, operatioperations, allergies, drug reactions, prescription medications,
                        herbal supplements, vitamins, over the counter remedies)
                    </Text>
                </View >
                <View style={{ borderColor: "black", backgroundColor: "white", width: "95%", borderWidth: 0.5, marginLeft: "2.5%" }}>
                    <TextInput
                        style={{ height: 200 }}
                    />
                </View>

                <View style={{ borderColor: "black", backgroundColor: "#BCBCBC", width: "95%", borderWidth: 0.5, marginLeft: "2.5%" }}>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>
                        Family Health History
                    </Text>
                </View>
                <View style={{ borderColor: "black", backgroundColor: "white", width: "95%", borderWidth: 0.5, marginLeft: "2.5%" }}>
                    <TextInput
                        style={{ height: 100 }}
                    />
                </View>

                <View style={{ borderColor: "black", backgroundColor: "#BCBCBC", width: "95%", borderWidth: 0.5, marginLeft: "2.5%" }}>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>
                        Diagnosis
                    </Text>
                </View>
                <View style={{ borderColor: "black", backgroundColor: "white", width: "95%", borderWidth: 0.5, marginLeft: "2.5%" }}>
                    <TextInput
                        style={{ height: 200 }}
                    />
                </View>

                <View style={{ borderColor: "black", backgroundColor: "#BCBCBC", width: "95%", borderWidth: 0.5, marginLeft: "2.5%" }}>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>
                        Treatment
                    </Text>
                </View>
                <View style={{ borderColor: "black", backgroundColor: "white", width: "95%", borderWidth: 0.5, marginLeft: "2.5%" }}>
                    <TextInput
                        style={{ height: 150 }}
                    />
                </View>

                <View style={{ flex: 1, flexDirection: "row", marginLeft: "2.5%" }}>
                    <View style={{ width: "32%" }}>
                        <View style={{ borderColor: "black", backgroundColor: "#BCBCBC", borderWidth: 0.5 }}>
                            <Text style={{ fontSize: 20, textAlign: "center" }}>
                                Diagnosis
                        </Text>
                        </View>
                        <View style={{ borderColor: "black", backgroundColor: "white", borderWidth: 0.5 }}>
                            <TextInput
                                style={{ height: 50 }}
                            />
                        </View>
                    </View>

                    <View style={{ width: "33%" }}>
                        <View style={{ borderColor: "black", backgroundColor: "#BCBCBC", borderWidth: 0.5 }}>
                            <Text style={{ fontSize: 20, textAlign: "center" }}>
                                Date (DD/MM/YY)
                            </Text>
                        </View>
                        <View style={{ borderColor: "black", backgroundColor: "white", borderWidth: 0.5 }}>
                            <TextInput
                                style={{ height: 50 }}
                            />
                        </View>
                    </View>

                    <View style={{ width: "32.5%" }}>
                        <View style={{ borderColor: "black", backgroundColor: "#BCBCBC", borderWidth: 0.5 }}>
                            <Text style={{ fontSize: 20, textAlign: "center" }}>
                                Signature
                            </Text>
                        </View>
                        <View style={{ borderColor: "black", backgroundColor: "white", borderWidth: 0.5 }}>
                            <TextInput
                                style={{ height: 50 }}
                            />
                        </View>
                        {/* <View style={styles.preview}>
                            {this.state.signature ? (
                                <Image
                                    resizeMode={"contain"}
                                    // style={{ width: 335, height: 114 }}
                                    source={{ uri: this.state.signature }}
                                />
                            ) : null}
                        </View>
                        <Signature
                            onOK={this.handleSignature}
                            onEmpty={this.handleEmpty}
                            // descriptionText="Sign"
                            clearText="Clear"
                            confirmText="Save"
                            webStyle={style}
                        /> */}
                    </View>
                </View>

                <View style={{ marginLeft: "75%", width: 50, height: 20, marginBottom: 20 }}>
                    <TouchableOpacity
                        style={styles.sendInfo}
                        onPress={() => {
                            this.props.navigation.navigate("Patient Info");
                        }}
                    >
                        <View style={{ marginTop: 20 }}>
                            <Text
                                style={{ fontSize: 16, textAlign: "center", justifyContent: "center", color: "black" }}
                            >
                                Save
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: "5%", marginBottom: "5%" }}>
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
            </View >
        );
    }
}

RecordFormScreen.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e9e9e8",
        flex: 1,
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
        marginTop: "8%",
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity: 0.8,
        shadowColor: "#8C8C8C",
    },
    headerText: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    preview: {
        width: 335,
        height: 114,
        backgroundColor: "#F8F8F8",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15
    },
    previewText: {
        color: "#FFF",
        fontSize: 14,
        height: 40,
        lineHeight: 40,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#69B2FF",
        width: 120,
        textAlign: "center",
        marginTop: 10
    }
});