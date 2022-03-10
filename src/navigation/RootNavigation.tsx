import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AuthNavigator from "./AuthNavigator"
import routes from "./routes"
import { NavigationContainer } from "@react-navigation/native"

const RootStack = createNativeStackNavigator()

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <RootStack.Screen name={routes.AuthStack} component={AuthNavigator}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator