import React, { useContext } from "react";
import { View } from "react-native";
import { SDashCardContent, SDateSelect} from "./styles/StyledDashBoard";
import { SEventDateCont, SEventDateDisplay, SEventDescDisplay, SEventTitle, SEventTitleCont } from "./styles/StyledListEvents";
import { GetDateData } from "../services/DateManager";
import { SITemCheckd, SInputLabel } from "./styles/StyledNewEvent";
import { ApplicationContext } from "../context/NewContext";

const EventView = ({route}) =>{
    const { item } = route.params;
    const date = GetDateData(item.datatime);

    const {editTask} = useContext(ApplicationContext);
    
    const updateStatus=()=>{
        let newStatus = item.status === "done" ? "in_progress" : "done"
        let myData = {...item, status: newStatus};
        editTask(item.id, myData)
    }

    return(
        <SDashCardContent>
            <SEventTitleCont type={item.type}>
                <SEventTitle>{item.title}</SEventTitle>
                {item.type !== "task" && 
                    <SEventDateCont type={item.type}>
                        <SEventDateDisplay>{item.type === "activity" ? 'Actividad' : 'Recordatorio'}</SEventDateDisplay>
                        <SEventDateDisplay> para el </SEventDateDisplay>
                        <SEventDateDisplay>{date.longDate}</SEventDateDisplay>  
                    </SEventDateCont>}
                <SEventDescDisplay>{item.description}</SEventDescDisplay>
            </SEventTitleCont>
                {item.type === "task" && <>
                    <View style={{height: 20}} />
                    <SDateSelect>
                        <SInputLabel w={"35%"}>Completado?</SInputLabel>
                        <SITemCheckd
                                size={45}
                                fillColor="#F7A831"
                                unfillColor="#FFFFFF"
                                iconStyle={{ borderColor: "#F7CA88" }}
                                innerIconStyle={{ borderWidth: 3,}}
                                isChecked={item.status === "done"}
                                onPress={updateStatus}
                                />
                    </SDateSelect>
                </> 
                }
            
        </SDashCardContent>
    )
}

export default EventView