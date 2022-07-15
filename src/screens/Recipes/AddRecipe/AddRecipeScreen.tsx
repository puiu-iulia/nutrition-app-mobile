import React, {useEffect, useLayoutEffect} from 'react'
import { View, KeyboardAvoidingView, Text, ScrollView } from 'react-native'
import { Screen } from '../../../components/Screen/Screen'
import { useTheme } from 'react-native-paper'
import { useAddRecipeScreen } from './useAddRecipeScreen'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../../theme/generalColors'
import { TextInput, Button } from 'react-native-paper'
import { MyImagePicker } from '../../../components/ImagePicker/ImagePicker'
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens'

const AddRecipeScreen = () => {
    const theme = useTheme()

    const {
        goBack,
        title,
        setTitle,
        description,
        setDescription,
        duration, 
        setDuration,
        styles,
        link, 
        setLink,
        step, 
        setStep,
        steps,
        ingredient, 
        setIngredient,
        tag, 
        setTag,
        ingredients,
        tags,
        onSave,
        setImage
    } = useAddRecipeScreen()

    return (
        <Screen
            navBarTitle='Add New Recipe'
            backgroundColor={colors.white}
            navBarBackgroundColor={theme.colors.primary}
            backArrowButton={true}
            leftButtonAction={goBack}
        >
            <ScrollView style={styles.mainView} >
                <KeyboardAvoidingView behavior='height'>
                    <TextInput 
                        label={"Title"}
                        mode="outlined"
                        value={title}
                        onChangeText={setTitle}
                        //keyboardType="email-address"
                        style={styles.input}
                    />
                    <MyImagePicker 
                        onSubmit={(file: string) => {setImage(file)}}
                    />
                    <Text>Steps</Text>
                    <TextInput 
                        label={"Add Step (optional)"}
                        mode="outlined"
                        value={step}
                        onChangeText={setStep}
                        placeholder={'Add Step'}
                        //keyboardType="email-address"
                        style={styles.input}
                    />
                    <TextInput 
                        label={"Add Ingredient (optional)"}
                        mode="outlined"
                        value={ingredient}
                        onChangeText={setIngredient}
                        //keyboardType="email-address"
                        placeholder={'Add ingredient'}
                        style={styles.input}
                    />
                    <TextInput 
                        label={"Add Tag (optional)"}
                        mode="outlined"
                        value={tag}
                        onChangeText={setTag}
                        placeholder={'Add tag'}
                        //keyboardType="email-address"
                        style={styles.input}
                    />
                    <TextInput 
                        label={"Duration (optional)"}
                        mode="outlined"
                        value={duration}
                        onChangeText={setDuration}
                        //keyboardType="email-address"
                        style={styles.input}
                    />
                    <TextInput 
                        label={"Link (optional)"}
                        mode="outlined"
                        value={link}
                        onChangeText={setLink}
                        //keyboardType="email-address"
                        style={styles.input}
                    />
                    <TextInput 
                        label={"Description (optional)"}
                        mode="outlined"
                        value={description}
                        multiline={true}
                        onChangeText={setDescription}
                        //keyboardType="email-address"
                        style={styles.inputDescirption}
                    />
                    <Button 
                        onPress={onSave}
                        mode='contained'
                        style={{marginBottom: 24}}
                    >Save</Button>
                </KeyboardAvoidingView>
            
            </ScrollView>
        </Screen>
    )
}

export default AddRecipeScreen