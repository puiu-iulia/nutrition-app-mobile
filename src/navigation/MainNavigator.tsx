import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import RecipeScreen from "../screens/Recipes/RecipeScreen"
import routes from "./routes"
import { useTheme } from "react-native-paper"
import MealPlannerScreen from "../screens/MealPlanner/MealPlannerScreen"
import ShoppingListScreen from "../screens/Shopping/ShoppingListScreen"

const MainStack = createNativeStackNavigator()

const Tab = createMaterialBottomTabNavigator()

const BottomTabs = () => {
    const { colors } = useTheme();
    return (
        <Tab.Navigator 
            barStyle={{ backgroundColor: colors.primary, height: 64 }}
            activeColor={'#fff'}
        >
        <Tab.Screen
            name='Meal PLanner'
            options={{ tabBarIcon: 'calendar' }}
            component={MealPlannerScreen}
        />
        <Tab.Screen
            name='Recipes'
            options={{ tabBarIcon: 'food-variant' }}
            component={RecipeScreen}
        />
        <Tab.Screen
            name='Shopping List'
            options={{ tabBarIcon: 'format-list-checkbox' }}
            component={ShoppingListScreen}
        />
      </Tab.Navigator>
    );
  };

const MainNavigator = () => {
    return (
        <MainStack.Navigator 
            screenOptions={{
                headerShown: false,
            }}
        >
            <MainStack.Group>
                <MainStack.Screen name={routes.RecipesTab} component={BottomTabs} />
            </MainStack.Group>
            <MainStack.Group>
                <MainStack.Screen
                    name='MealPLanner'
                    component={MealPlannerScreen}
                />
                <MainStack.Screen
                    name='Recipes'
                    component={RecipeScreen}
                />
                <MainStack.Screen
                    name='ShoppingList'
                    component={ShoppingListScreen}
                />
            </MainStack.Group>
        </MainStack.Navigator>
    )
}

export default MainNavigator