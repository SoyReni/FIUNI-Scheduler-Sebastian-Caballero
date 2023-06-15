import React, { useContext, useEffect, useState } from "react";
import { SDashCardContent, SDateSelect } from "../components/styles/StyledDashBoard";
import { ScrollView } from "react-native";
import { SSubmit, SInputGroup, SInput, SDateText, SInputLabel, SITemCheckd } from "../components/styles/StyledNewEvent";
import { SItemPicker } from "../components/styles/StyledListEvents";
import { radioButtons } from "../../data/UseFullData";
import { Formik } from "formik";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { GetDateData } from "../services/DateManager";
import Textarea from 'react-native-textarea';
import { ApplicationContext } from "../context/NewContext";


export default function NewEventScreen () {
    const {addNewTask, nextIndex} = useContext(ApplicationContext)
    const initialValues = {
            id : nextIndex,
            title : '',
            description: '',
            datetime: '', 
            type: 'task',
            status: 'in_progress'
    }
    const handleSubmitForm = (event) =>{
        addNewTask(event)
    }
    
    return (
        <SDashCardContent>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmitForm}>
                    {({ handleSubmit, values, setFieldValue }) => (
                        <MyForm values={values} setFieldValue={setFieldValue} handleSubmit={handleSubmit} />
                    )}
            </Formik>
        </SDashCardContent>
    )
}

const MyForm = props =>{
    const [selectedID, setSelectedId] = useState("task")
    const [buttonName, setButtonName] = useState("Tarea")
    const { handleSubmit, values, setFieldValue } = props;
    const [visible, setVisible] = useState(false);
    const [errorTitle, setErrorTitle] = useState(false); 
    const [errorDate, setErrorDate] = useState(false);
    useEffect(() => {
        setFieldValue('type', selectedID)
        setButtonName(selectedID === "reminder" ? "Crear nuevo recordatorio" : selectedID === "activity" ? "Crear nueva actividad" : "Crear nueva tarea")
      }, [selectedID])
    const openDatePicker = () =>{
        setVisible(true)
    }
    const closeDatePicker = () => {
        setVisible(false)
    }
    const handleChangeTitle = title => {
        setFieldValue('title', title.nativeEvent.text)
    }
    const handleChangeDesc = desc => {
        setFieldValue('description', desc)
    }
    const handleConfirm = date => {
        setVisible(false)
        setFieldValue('datetime', new Date(date))
    }
    const updateStatus = () => {
        let newStatus = values.status === "done" ? "in_progress" : "done"
        setFieldValue('status', newStatus)
    }
    const errorHandleSubmit = (event) =>{
        if (values.title === ''){
            setErrorTitle(true)
        } else if (values.type !== "task" && values.datetime === ''){
            setErrorTitle(false)
            setErrorDate(true)
        } else {
            setErrorTitle(false)
            setErrorDate(false)
            handleSubmit(values)
        }
    }
    

    return (
        <ScrollView>
            <SInputGroup>
                <SItemPicker
                 radioButtons={radioButtons}
                 onPress={setSelectedId}
                 selectedId={selectedID}
                 layout="row"
                />
                <SDateSelect>
                    <SInputLabel w={"20%"}>Titulo:</SInputLabel>
                    <SInput
                        error={errorTitle}
                        placeholder="titulo del evento"
                        placeholderTextColor={"#c3c3c3"}
                        onChange={handleChangeTitle}
                        value={values.name}
                        />
                </SDateSelect>
                {(selectedID !== "task") && <>
                    <SDateSelect>
                        <SInputLabel>Fecha:</SInputLabel>
                        <SDateText error={errorDate} isSelected={values.datetime} onPress={openDatePicker}>{values.datetime !== "" ? 
                            `${GetDateData(values.datetime).date}/${GetDateData(values.datetime).sMonth}/${GetDateData(values.datetime).year}`
                            : `mm/dd/aaa`
                        }</SDateText>
                    </SDateSelect>
                    <DateTimePickerModal
                        isVisible={visible}
                        onCancel={closeDatePicker}
                        onConfirm={handleConfirm}
                        mode="date"
                    />
                </>}
                {(selectedID === "task") && 
                    <SDateSelect>
                        <SInputLabel w={"35%"}>Completado?</SInputLabel>
                        <SITemCheckd
                            size={35}
                            fillColor="#F7A831"
                            unfillColor="#FFFFFF"
                            iconStyle={{ borderColor: "#F7CA88" }}
                            innerIconStyle={{ borderWidth: 3,}}
                            isChecked={values.status === "done"}
                            onPress={updateStatus}
                        />
                    </SDateSelect>}
                <SInputLabel w={"100%"}>Descripcion:</SInputLabel>
                <Textarea
                    maxLength={250}
                    containerStyle={{
                        backgroundColor: "#ffffff",
                        paddingTop: 5,
                        paddingLeft: 10,
                        paddingRigth: 10,
                        paddingBottom: 5,
                        borderRadius: 15}}
                    placeholder={'descripcion del evento'}
                    placeholderTextColor={'#c3c3c3'}
                    underlineColorAndroid={'transparent'}
                    onChangeText={handleChangeDesc}
                />
            </SInputGroup>
            <SSubmit
                onPress={errorHandleSubmit}
                type={selectedID}
            >{buttonName}</SSubmit>
        </ScrollView>
    )

}

