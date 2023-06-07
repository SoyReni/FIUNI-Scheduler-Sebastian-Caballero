import React from "react";
import { Text } from "react-native";
import {Header} from 'react-native-elements';

const MyHeader = () => {
    return (<><Header
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
    ></Header></>)
}

export default MyHeader; 