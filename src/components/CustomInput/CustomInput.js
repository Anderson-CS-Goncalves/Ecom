import {React, useState} from "react";
import { View, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons"

const CustomInput = (props) => {
    const [secText, setSecText] = useState(props.secureTextEntry);
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholderTextColor={"#BFBFBF"}
                {...props}
                secureTextEntry={secText}
            />
            <Ionicons name={props.icon} size={18} color={"black"} style={styles.icon}/>
            {props.secureTextEntry && (
                <TouchableOpacity
                onPress={() => setSecText(!secText)}
                style={styles.viewPassword}
                >
                    <Ionicons 
                    name={secText ? "eye-sharp" : "eye-off-sharp"} 
                    size={24} 
                    color={"black"} 
                    style={styles.iconSecret}/>
                </TouchableOpacity>
            )}
        </View>
    )
}       



const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: 20,
    },
    input: {
        height: 50,
        flex: 1,
        backgroundColor: '#D9D9D9',
        paddingLeft: 40,
        marginHorizontal: 10,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#BFBFBF',
        fontSize: 16,
    },
    icon: {
        position: "absolute",
        left: 24,
        top: 16
    },
    viewPassword: {
        borderRadius: 12,
        height: 50,
        width: 50,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        right: 12,
        top: 0
    },
    iconSecret: {

    },
})

export default CustomInput