import {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AddTask from './AddTask';
import Task from './Task';
import {v4 as uuid} from 'uuid';

const ToDoList = () => {
    const [tasksArr, settasksArr] = useState([]);
    const getTaskText = (task) => {
        tasksArr.push({ id:uuid() ,task:task});
        settasksArr([...tasksArr]);
    }
    const deleteTask = (id) => {
        const index = tasksArr.findIndex((ele)=>ele.id === id);
        tasksArr.splice(index,1);
        settasksArr([...tasksArr]);
    }
    // console.warn(tasksArr)

    return (
        <View>
            <AddTask getTaskText={getTaskText}/>
            {tasksArr.map((element)=><Task key={element.id} task = {element} deleteTask = {deleteTask} ></Task>)}
        </View>
    );
}
const styles = StyleSheet.create({})
export default ToDoList;
