import React from "react";
import { SPageText, SPageTitle } from "./styles/StyledNavigation";
import { Text } from "react-native";

const ScreenHeader = ({name}) => {
    return (
        <SPageTitle><SPageText>{name}</SPageText></SPageTitle>
    )
}

export default ScreenHeader;