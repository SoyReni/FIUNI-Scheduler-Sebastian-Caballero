import React from "react";
import { Image, View, Text } from "react-native";
import { styled } from "styled-components/native";

const SLogo = styled(Image)`
    flex: 1;
    resize-mode: contain;
    margin: 5px;
    align-self: center;    
`
const SPageTitle = styled(View)`
    align-items: center;
    width: 100%;
    margin: 0 -10px; 
    `
    
    const SPageText = styled(Text)`
    font-family: "sans-serif";
    font-weight: 900;
    font-size: 16px;
    align-self: center;
`

export {SLogo, SPageTitle, SPageText}