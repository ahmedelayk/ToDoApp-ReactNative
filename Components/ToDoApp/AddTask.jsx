import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, Pressable } from 'react-native';

const AddTask = ({getTaskText}) => {
    const [taskText, settaskText] = useState('');
    const [isNotValid, setisNotValid] = useState(false);
    const handleChangeText = (val) => {
        settaskText(val);
    }
    const handleAdd = () => {
        if(taskText.length>3){
            setisNotValid(false);
            getTaskText(taskText);
        }else {
            setisNotValid(true);
        }
    }
    return (
        <View style={styles.form}>
            <Text style={styles.header}>To Do List</Text>
            <View style={styles.formContainer}>
                <TextInput style={styles.inputField} value={taskText} placeholder='Enter a task' onChangeText={(val) => { handleChangeText(val) }}></TextInput>
                <Pressable
                    style={styles.addBtn}
                    onPress={handleAdd}
                    >
                    <Text style={styles.addBtnText}>ADD</Text>
                </Pressable>
            </View>
            {isNotValid && <Text>min. characters must be more than 3 chars</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#EDEDED',
        padding: 10,
        borderRadius: 6
    },
    header: {
        backgroundColor:'#0079FF',
        color: "#FFF",
        textAlign:'center',
        fontSize:26,
        padding:12,
        marginBottom:12
    },
    formContainer: {
        display:'flex',
        flexDirection:'row',
        gap:20
    },
    inputField: {
        padding:8,
        borderBottomColor:"#0079FF",
        borderBottomWidth:2,
        color: '#000',
        fontSize:20,
        flexGrow:1
    },
    addBtn: {
        backgroundColor:'#0079FF',
        padding: 8,
        borderRadius:4,
    },
    addBtnText: {
        color:'#FFF',
        textAlign:'center',
        fontSize:20
    }

})

export default AddTask;
