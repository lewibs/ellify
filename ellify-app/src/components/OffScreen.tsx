import * as React from "react";
import { RouteProp } from '@react-navigation/core';
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
                style={styles.legal}
            >
                legal discalmer:
            </label>
            <label
                className="fas"
                style={styles.text}
                textWrap='true'
            >
                lewibs does not take responsibility for use of ellify. This app was created simply to see if it could be. Not to be used.
            </label>
            <image 
                src="https://github.com/lewibs/ellify/blob/main/ellify-app/images/spotifyRed.png?raw=true"
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
        backgroundColor: '#ffaaaa',
    },
    legal: {
        textAlignment: "center",
        fontSize: 30,
        color: "black",
        padding: 10,
    },
    text: {
        textAlignment: "center",
        fontSize: 20,
        color: "black",
        padding: 10,
    },
});