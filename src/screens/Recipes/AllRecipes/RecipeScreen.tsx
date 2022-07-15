import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Screen } from '../../../components/Screen/Screen'
import { useTheme } from 'react-native-paper'
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons'
import { RecipeModal } from '../../../components/RecipeModal/RecipeModal'
import { useRecipeScreen } from './useRecipeScreen'
import { colors } from '../../../theme/generalColors'

const RecipeScreen = () => {
    const theme = useTheme()

    const {
        goBack,
        goToAddRecipe
    } = useRecipeScreen()

    return (
        <Screen
            navBarTitle='Recipes'
            backgroundColor={colors.white}
            navBarBackgroundColor={theme.colors.primary}
            rightButtonTitle='Add Recipe'
            rightButton={
                <TouchableOpacity onPress={goToAddRecipe}>
                    <Icon 
                        name={'ios-add-outline'}
                        size={24}
                        color={colors.white}
                    />
                </TouchableOpacity>}
        >
            <Text>Recipes</Text>
        </Screen>
    )
}

export default RecipeScreen