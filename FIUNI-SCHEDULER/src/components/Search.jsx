import React, { useState } from "react";
import { SDashCardContainer, SDashCardContent, SDashCardTitle, SDateButton, SDateInputs, SDateSearch, SDateSelect, SDateText, SInput, SSubmit, STitleText } from "./styles/StyledDashBoard";
import { Button, Text, View } from "react-native";
import { Formik } from "formik";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { GetDateData } from "../services/DateManager";
import AppContext from "../context/AppContext";

export default function Search() {
    const context = AppContext;

    const handleSubmitForm = values => {
        context.searchTask(values.name, values.date);
    }

    return (
        <SDashCardContainer>
                    <SDashCardTitle>
                    <STitleText>Buscar eventos</STitleText>
                    </SDashCardTitle>
                    <SDashCardContent>
                        <Formik 
                            initialValues={{ name: '', date: false }}
                            onSubmit={handleSubmitForm}>
                                {({ handleSubmit, values, setFieldValue }) => (
                                    <MyForm values={values} setFieldValue={setFieldValue} handleSubmit={handleSubmit} />
                                )}
                        </Formik>
                    </SDashCardContent>
        </SDashCardContainer>
    )
}

const MyForm = props => {
    const { handleSubmit, values, setFieldValue } = props;
    const [visible, setVisible] = useState(false);
    
    const openDatePicker = () =>{
        setVisible(true)
    }
    const closeDatePicker = () => {
        setVisible(false)
    }
    const handleConfirm = date => {
        setVisible(false)
        setFieldValue('date', new Date(date))
    }
    const handleChangeTitle = title => {
        setFieldValue('name', title.value)
    }
    
    return (
        <View>
            <SDateSearch>
                <SDateInputs>
                    <SInput
                        placeholder="Titulo del evento"
                        onChange={handleChangeTitle}
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
                mode="date"
            ></DateTimePickerModal>
        </View>
    )

}

