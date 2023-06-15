import React, { useContext } from "react";
import { TouchableOpacity} from "react-native";
import { SItemPicker, SItemTypeSelectorContainer } from "../components/styles/StyledListEvents";
import { SDashCardContent, Separator } from "../components/styles/StyledDashBoard";
import { radioButtons } from "../../data/UseFullData";
import TaskShow from "../components/TaskShow";
import { ApplicationContext } from "../context/NewContext";

const TasksList = ({navigation}) => {
  const {filteredList, setSelectedType, selectedType} = useContext(ApplicationContext);
  
    return (
      <SDashCardContent>
        <SItemTypeSelectorContainer>
          <SItemPicker
            radioButtons={radioButtons} 
            onPress={setSelectedType}
            selectedId={selectedType}
            layout="row"
          />
        </SItemTypeSelectorContainer>
        {filteredList.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate('EventView', { item })}>
            <TaskShow  key={index} data={item}></TaskShow>
          </TouchableOpacity>
        ))}
        <Separator/>
      </SDashCardContent>
    );
  };
  
  export default TasksList;