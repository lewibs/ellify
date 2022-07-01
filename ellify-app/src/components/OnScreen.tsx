import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "./NavigationParamList";
import { StyleSheet } from "react-nativescript";

type OnScreenProps = {
    route: RouteProp<MainStackParamList, "On">,
    navigation: FrameNavigationProp<MainStackParamList, "On">,
}

export function OnScreen({ navigation }: OnScreenProps) {
    return (
        <flexboxLayout style={styles.container}>
        <label
            className="fas"
            style={styles.text}
        >
            Happy Listening :)
        </label>
        <image 
            src="https://github.com/lewibs/ellify/blob/main/ellify-app/images/spotifyGreen.png?raw=true"
            stretch="aspectFit" 
            onTap={() => navigation.navigate('Off')}
        />
    </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: '#aaffaa',
    },
    text: {
        textAlignment: "center",
        fontSize: 30,
        color: "black",
        padding: 10,
    },
});
