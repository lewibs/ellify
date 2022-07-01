import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { OffScreen } from "./OffScreen";
import { OnScreen } from "./OnScreen";

const StackNavigator = stackNavigatorFactory();

export const mainStackNavigator = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Off"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "white",
                },
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Off"
                component={OffScreen}
            />
            <StackNavigator.Screen
                name="On"
                component={OnScreen}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
