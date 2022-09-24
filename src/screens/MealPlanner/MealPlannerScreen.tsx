import moment from 'moment';
import React from 'react'
import { View, Text } from 'react-native'
//@ts-ignore
import CalendarPicker from 'react-native-calendar-picker';
import { colors } from '../../theme/generalColors';

const MealPlannerScreen = () => {
    return (
        <View>
            <Text>MealPlannerScreen</Text>
            <View>
                <CalendarPicker 
                    onDateChange={(date: any) => console.log(date)}
                    startFromMonday={true}
                    selectedDayColor={colors.primary}
                    minDate={moment.now()}
                    restrictMonthNavigation={true}
                />
            </View>
        </View>
    )
}

export default MealPlannerScreen