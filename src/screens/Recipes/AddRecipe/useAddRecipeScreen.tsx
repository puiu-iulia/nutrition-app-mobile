import React, {useEffect, useCallback, useState} from 'react'
import { useNavigation } from '../../../navigation/useNavigation'
import routes from '../../../navigation/routes'
import { useStyles } from "./styles"
import { useTheme } from 'react-native-paper'
import { useAppSelector } from '../../../utils/hooks/useStore'
import { createRecipe, uploadImageToRecipe } from '../../../services/DataServices/recipes'

export const useAddRecipeScreen = () => {

    const theme = useTheme()
    const styles = useStyles(theme)
    const navigation = useNavigation()

    const goToAddRecipe = () => {
        navigation.navigate(routes.AddRecipeScreen)
    }

    const goBack = () => {
        navigation.goBack()
    }

    const token = useAppSelector(state => state.auth.token)

 

    //Handle local state
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState('')
    const [link, setLink] = useState('')
    const [step, setStep] = useState('')
    const [steps, setSteps] = useState([])
    const [ingredient, setIngredient] = useState('')
    const [tag, setTag] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [tags, setTags] = useState([])
    const [image, setImage] = useState()

    const onSave = async () => {
        if (token) {
            const resCreateRecipe = await createRecipe(token, {
                title,
                // description,
                // time_minutes: 0,
                // link,
                // steps,
                // ingredients,
                // tags
            })
            if (resCreateRecipe.id && image) {
                const resUploadImage = await uploadImageToRecipe(token, image, resCreateRecipe.id)
                console.log('resUploadImage', resUploadImage)
                if (resUploadImage) {
                    goBack()
                }
            }
            //console.log('res create recipe', resCreateRecipe)
        }
      
    }

    return {
        goToAddRecipe,
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
    }
}