import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { Dialogs } from '@nativescript/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { StyleSheet } from "react-nativescript";
import { MainStackParamList } from "./NavigationParamList";

type OffScreenProps = {
    route: RouteProp<MainStackParamList, "Off">,
    navigation: FrameNavigationProp<MainStackParamList, "Off">,
}

export function OffScreen({ navigation }: OffScreenProps) {
    return (
        <flexboxLayout style={styles.container}>
            <label
                className="fas"
                style={styles.text}
            >
                Get Startedxcvzxcv
            </label>
            <image 
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                stretch="aspectFit" 
                onTap={() => navigation.navigate('On')}
            />
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
    },
    text: {
        textAlignment: "center",
        fontSize: 30,
        color: "black",
    },
});