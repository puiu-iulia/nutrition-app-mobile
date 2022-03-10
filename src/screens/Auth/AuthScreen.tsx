import React, { useState } from "react"
import { Text, KeyboardAvoidingView, View, Platform } from 'react-native'
import { useTheme, TextInput, Button } from "react-native-paper"
import { useStyles } from "./styles"

const AuthScreen = () => {

    const theme = useTheme()
    const styles = useStyles(theme)
    const [email, setEmail] = useState('')

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.mainView}
        >
            <View style={styles.screen}>
                <Text style={styles.logo}>Foody</Text>
                <View style={styles.inputViewContainer}>
                    <TextInput 
                        label={"Email"}
                        mode="outlined"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        style={styles.input}
                    />
                    <TextInput 
                        label={"Password"}
                        value={email}
                        mode="outlined"
                        onChangeText={setEmail}
                        secureTextEntry={true}
                        style={styles.input}
                        right={<TextInput.Icon
                            name="eye"
                            color={'#505050'}
                            onPress={() => {}}
                        />}
                    ></TextInput>
                    <View style={styles.switchContainer}>
                        <Text>Already have an account?</Text>
                        <Button
                            mode="text" 
                            dark={false}
                        >Login</Button>
                    </View>
                    <Button
                        mode="contained" 
                        style={styles.button}
                        dark={true}
                        color='#fff'
                    >Create account</Button>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AuthScreen