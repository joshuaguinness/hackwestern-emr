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

export default class RecordFormScreen extends Component {
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

                <View style={{
                    borderColor: "black", backgroundColor: "#BCBCBC", width: "95%", borderWidth: 0.5, marginLeft: "2.5%", marginTop: 50
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
                        style={{ height: 200 }}
                    />
                </View>

                <View style={{ borderColor: "black", backgroundColor: "#BCBCBC", width: "95%", borderWidth: 0.5, marginLeft: "2.5%" }}>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>
                        Referral Diagnosis
                    </Text>
                </View>
                <View style={{ borderColor: "black", backgroundColor: "white", width: "95%", borderWidth: 0.5, marginLeft: "2.5%" }}>
                    <TextInput
                        style={{ height: 200 }}
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
                                style={{ height: 100 }}
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
                                style={{ height: 100 }}
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
                                style={{ height: 100 }}
                            />
                        </View>
                    </View>
                </View>

                <View style={{ marginBottom: "5%", marginLeft: "68%", justifyContent: "center" }}>
                    <TouchableOpacity
                        style={styles.sendInfo}
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
                        <View>
                            <Text
                                style={[
                                    styles.customBtnText,
                                    { fontSize: 24, textAlign: "center", justifyContent: "center", color: "black" }
                                ]}
                            >
                                Save
                        </Text>
                        </View>
                    </TouchableOpacity>
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
    }
});