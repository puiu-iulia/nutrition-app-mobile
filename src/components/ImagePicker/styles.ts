import { StyleSheet } from "react-native"
import { Theme } from "react-native-paper/lib/typescript/types"
import { Platform } from "react-native"
import { colors } from "../../theme/generalColors"

export const useStyles = (props?: Theme) => 
    StyleSheet.create({
        mainView: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.greyLightest,
            borderColor: colors.greyLight,
            borderWidth: 1,
            borderRadius: 4,
            overflow: 'hidden'
        },
        buttonView: {
            height: 184,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        imageView: {
            height: 216,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        image: {
            width: '100%', 
            height: 184
        },
        buttonsView: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        controlButtonView: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        buttonText: {
            fontSize: 14,
            fontWeight: '700',
            color: colors.greyLight,
            marginLeft: 4
        }
    })