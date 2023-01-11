import React from "react";
import { View, Text,Image, TextInput,TouchableOpacity, StyleSheet, ImageBackground } from "react-native";

function Login(props) {
    return (
        <View style={{flex:1,justifyContent:"center",
            backgroundColor:"white"}}>
            <Image style={{marginTop:250,alignSelf:"center"}} source={require('../../src/Images/png/Logo.png')} />
            <Text style={styles.textLabel}>Login</Text>
            <View style={{
                flexDirection:"row",
                borderBottomWidth:2,
        borderBottomColor:"#F0F4F5",
        marginTop:30,
justifyContent:"center",
width:"80%",
alignSelf:"center"
            }}><Image style={{alignSelf:"center"}} source={require('../../src/Images/png/S.png')}/>       
            <TextInput style={styles.textinput}>
            johndoe@email.com
            </TextInput></View>
            <View style={{
                flexDirection:"row",
                borderBottomWidth:2,
        borderBottomColor:"#F0F4F5",
        marginTop:20,
justifyContent:"center",
width:"80%",
alignSelf:"center"
            }}><Image style={{alignSelf:"center"}} source={require('../../src/Images/png/Lock.png')}/>       
            <TextInput style={styles.textinput}>
            ******
            </TextInput></View><ImageBackground style={styles.imagebg}
            source={require('../../src/Images/png/Mask.png')}>
            <TouchableOpacity style={styles.touch}
             onPress={() => {
                props.navigation.navigate('Disclaimer')
              }}
            ><Text style={styles.touchtext}>
                Login</Text>
                <Image style={{
                    marginLeft:7,
                    alignSelf:"center",
                    // marginTop:5
                }} source={require('../../src/Images/png/Errow.png')}/>
                </TouchableOpacity>
                <TouchableOpacity><Text style={styles.text2}>Forgot Password?</Text></TouchableOpacity>
                </ImageBackground>
        </View>
    )
}
export default Login


const styles = StyleSheet.create({
    textLabel: {
        color: "#000000",
        fontSize: 22,
        marginTop:35,
        alignSelf:"center",
        fontFamily:"Poppins-Bold"
    },
    textbox: {
        borderBottomWidth:2,
        borderBottomColor:"#f0f4f5",
    
        marginRight:50,
        marginLeft:50,
    },
    textinput: {
        color: "#000000",
        fontSize: 16,
        marginLeft:30,
        width:"80%",
        fontFamily:"Poppins-Bold"
    },
    touch:{
        borderWidth:2,
        borderColor:"#DD1D21",
        borderRadius:60,
        alignSelf:"center",
        backgroundColor:"#DD1D21",
        flexDirection:"row",
        padding:10,
        marginTop:35,
        alignItems:"center",
        width:"29%",
        justifyContent:"center"
    },
    touchtext:{
        color:"#FFFFFF",
        fontSize:15,
        fontFamily:"Poppins-Medium"
    },
    text2:{
        fontSize:12,
        color:"#000000",
        alignSelf:"center",
        marginTop:20,
    fontFamily:"Poppins-Bold"
    },
    imagebg:{
height:"75%",
backgroundColor:"#000000c5"
    }
})