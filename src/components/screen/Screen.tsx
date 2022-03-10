import React from "react"
import { View, StyleProp, ViewStyle } from 'react-native'
import  helpers from '../../theme/helpers'

interface IScreen {
    children?: JSX.Element | JSX.Element[]
    style?: StyleProp<ViewStyle>
}

const Screen = ({children, style} : IScreen) => {
    return (
        <View style={[style, helpers.fill]}>
            {children}
        </View>
    )
}

export default Screen