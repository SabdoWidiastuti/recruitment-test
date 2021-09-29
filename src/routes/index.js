import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTE_NAMES } from '../utils/Constants';
import {
    HomePage,
    DetailTransaction
} from '../screen';

const Stack = createNativeStackNavigator();

function RouteStack() {
    return (
        <Stack.Navigator
            initialRouteName={ROUTE_NAMES.HOME_PAGE}
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
            }}
        >
            <Stack.Screen
                name={ROUTE_NAMES.HOME_PAGE}
                component={HomePage}
                options={{
                    title: "List Transaction"
                }}
            />
            <Stack.Screen
                name={ROUTE_NAMES.DETAIL_PAGE}
                component={DetailTransaction}
                options={{
                    title: "Detail Transaction"
                }}
            />
        </Stack.Navigator>
    )
}

export default RouteStack;