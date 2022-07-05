import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "./NavigationParamList";
import { StyleSheet } from "react-nativescript";
import * as application from '@nativescript/core/application';

type OnScreenProps = {
    route: RouteProp<MainStackParamList, "On">,
    navigation: FrameNavigationProp<MainStackParamList, "On">,
}

declare var com: any

export function OnScreen({ navigation }: OnScreenProps) {
    //TODO: java can be embeded here. using java I am able to make a vpn tunnel to modify api requests
    console.log(com.tns.Vpn.gah());


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
