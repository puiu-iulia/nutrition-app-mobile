import React, {useEffect, useCallback, useState} from 'react'
import { useNavigation } from '../../../navigation/useNavigation'
import routes from '../../../navigation/routes'

export const useRecipeScreen = () => {
    const navigation = useNavigation()


    const goToAddRecipe = () => {
        navigation.navigate(routes.AddRecipeScreen)
    }

    const goBack = () => {
        navigation.goBack()
    }


    return {
        goToAddRecipe,
        goBack
    }
}