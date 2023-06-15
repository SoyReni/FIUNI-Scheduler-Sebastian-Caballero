import React, { useContext, useState } from "react";
import { SDashCardContainer, SDashCardContent, SDashCardTitle, SDateButton, SDateInputs, SDateSearch, SDateSelect, SDateText, SInput, SSubmit, STitleText } from "./styles/StyledDashBoard";
import { Formik } from "formik";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { GetDateData } from "../services/DateManager";
import { ApplicationContext } from "../context/NewContext";

export default function Search() {
    const {searchTask} = useContext(ApplicationContext)
    const handleSubmitForm = (event) => {
        searchTask(event.date, event.name)
    }

    return (
        <SDashCardContainer>
                    <SDashCardTitle>
                    <STitleText>Buscar eventos</STitleText>
                    </SDashCardTitle>
                    <SDashCardContent>
                        <Formik 
                            initialValues={{ name: '', date: "" }}
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
        setFieldValue('name', title.nativeEvent.text)
    }
    
    return (
        <View>
            <SDateSearch>
                <SDateInputs>
                    <SInput
                        placeholder="Titulo del evento"
                        placeholderTextColor={"#c3c3c3"}
                        onChange={handleChangeTitle}
                        value={values.name}
                    /><SDateSelect>
                        <SDateText isSelected={values.date} onPress={openDatePicker}>{values.date ? 
                        `${GetDateData(values.date).date}/${GetDateData(values.date).sMonth}/${GetDateData(values.date).year}`
                        : `mm/dd/aaa`
                        }</SDateText>
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

