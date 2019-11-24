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
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

var radio_props = [
    { label: 'Text', value: 0 },
    { label: 'Voice', value: 1 }
];

export default class ConsentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerText}>
                    <Text style={[{ paddingTop: 40 }, { fontSize: 20 }]}>Western Medical Clinic</Text>
                    <Text>1151 Richmond St, London, ON N6A 3K7</Text>
                </View>
                <View style={{ width: "95%" }}>
                    <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginTop: "7%" }}>
                        Patient Consent to Treatment Form
                    </Text>
                    <Text style={{ marginLeft: "5%", marginTop: "8%", fontSize: 16 }}>
                        I have discussed with my family doctor the specifics of my assessment or treatment and understand the nature, risks and reasons for this procedure. I voluntarily consent to Traditional Chinese Medicine/Acupuncture and understand that I may withdraw my consent and halt my participation at any time.
                    </Text>

                    <Text style={{ marginLeft: "5%", marginTop: "4%", fontSize: 16 }}>
                        1.	My practitioner has informed me of the risks and symptoms of treatments, which can include, but are not limited to: slight pain, light-headedness or nausea, soreness, bruising, bleeding or discolouration of the skin, and the possibility of other unforeseen risks. I freely accept the risks involved with my procedure.
                    </Text>

                    <Text style={{ marginLeft: "5%", marginTop: "4%", fontSize: 16 }}>
                        2.	My practitioner has informed me of the risks and symptoms of treatments, which can include, but are not limited to: slight pain, light-headedness or nausea, soreness, bruising, bleeding or discolouration of the skin, and the possibility of other unforeseen risks. I freely accept the risks involved with my procedure.
                    </Text>
                    <Text style={{ marginLeft: "5%", marginTop: "4%", fontSize: 16 }}>
                        3.	My practitioner has informed me of the risks and symptoms of treatments, which can include, but are not limited to: slight pain, light-headedness or nausea, soreness, bruising, bleeding or discolouration of the skin, and the possibility of other unforeseen risks. I freely accept the risks involved with my procedure.
                    </Text>
                    <Text style={{ marginLeft: "5%", marginTop: "4%", fontSize: 16 }}>
                        4. I understand that I must let my practitioner know if I am carrying, or believe to have any infectious agents, including but at not limited to HIV, TB and Hepatitis. In some cases where cross-infection is high, my practitioner may withhold treatment.
                    </Text>
                    <Text style={{ marginLeft: "5%", marginTop: "4%", fontSize: 16 }}>
                        5. 6.	I understand that the fees charged for my treatment are not covered under OHIP and must be covered in full by myself or through third party insurance. I am responsible for the full and prompt payment after services have been rendered.
                    </Text>

                    <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                        <View>
                            <Text style={{ marginTop: "15%", fontSize: 14 }}>
                                Patient Signature:
                            </Text>
                            <View style={{ borderColor: "black", width: 200, backgroundColor: "white", borderWidth: 0.5 }}>
                                <TextInput
                                    style={{ height: 30 }}
                                />
                            </View>
                        </View>
                        <View style={{ marginLeft: "3%", marginTop: "5%" }}>
                            <TouchableOpacity
                                style={styles.recordButton}
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
                                <View>
                                    <Text
                                        style={[
                                            styles.customBtnText,
                                            { fontWeight: "bold", fontSize: 14, textAlign: "center", marginTop: 8 }
                                        ]}
                                    >
                                        Record
                                </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
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
            </View>
        );
    }
}

ConsentForm.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e9e9e8",
        flex: 1,
    },
    headerText: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    customBtnText: {
        fontWeight: "400",
        color: "white",
    },
    recordButton: {
        backgroundColor: "#c71920",
        opacity: 0.85,
        borderRadius: 5,
        width: (Dimensions.get("window").width * 3) / 40,
        height: (Dimensions.get("window").width * 2) / 50,
        marginRight: "0%",
        marginLeft: "8%",
        marginTop: "8%",
    },
});