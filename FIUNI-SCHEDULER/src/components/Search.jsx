import React, { useState } from "react";
import { SDashCardContainer, SDashCardContent, SDashCardTitle, SDateButton, SDateInputs, SDateSearch, SDateSelect, SDateText, SInput, SSubmit, STitleText } from "./styles/StyledDashBoard";
import { Button, Text, View } from "react-native";
import { Formik } from "formik";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { GetDateData } from "../services/DateManager";

const Search = () => {
    const handleSubmit = () => {}
    const [visible, setVisible] = useState(false);
    const openDatePicker = () =>{
        setVisible(true)
    }
    const closeDatePicker = () => {
        setVisible(false)
    }
    const handleConfirm = () => {
        setVisible(false)
    }
    

    return (
        <SDashCardContainer>
            <SDashCardTitle>
               <STitleText>Buscar eventos</STitleText>
            </SDashCardTitle>
            <SDashCardContent>
                <Formik 
                    initialValues={{ name: '', date: false }}
                    onSubmit={handleSubmit}>
                        {({ handleSubmit, values }) => (
                            <View>
                                <SDateSearch>
                                    <SDateInputs>
                                        <SInput
                                            placeholder="Titulo del evento"
                                            value={values.name}
                                            /><SDateSelect>
                                            <SDateButton onPress={openDatePicker}>Seleccionar Otra Fecha</SDateButton>
                                            <SDateText>{`${GetDateData(values.date).date}-${GetDateData(values.date).sMonth}-${GetDateData(values.date).year}`}</SDateText>
                                        </SDateSelect>
                                    </SDateInputs>
                                    <SSubmit onPress={handleSubmit}>Buscar eventos</SSubmit>
                                </SDateSearch>
                                
                                <DateTimePickerModal 
                                    isVisible={visible}
                                    onCancel={closeDatePicker}
                                    onConfirm={handleConfirm}
                                ></DateTimePickerModal>
                            </View>
                        )}
                </Formik>
            </SDashCardContent>
        </SDashCardContainer>
    )
}

export default Search 