import React from "react";
import { View, Text } from "react-native";
import { SDahsItem, SDahsItemDate, SDahsItemInfoContainer, SDashDate, SDashItemInfo, SVerTodos } from "./styles/StyledDashBoard";
import { GetDateData } from "../services/DateManager";

const DashBoardListItem = (data) => {
    const dates = GetDateData(data.data.datetime)
    let title = data.data.title
    if(title.length > 20 ) title = `${title.slice(0, 20)}...`

    return (
        <SDahsItem >
            {data.data.type != "task" && 
                <SDahsItemDate type={data.data.type}>
                    <SDashDate>{dates.sMonth}</SDashDate>
                    <SDashDate>{dates.date}</SDashDate>
                </SDahsItemDate>
            }
            <SDahsItemInfoContainer type={data.data.type}>
                <SDashItemInfo>{title}</SDashItemInfo>
            </SDahsItemInfoContainer>
       </SDahsItem>
    )
}

export default DashBoardListItem