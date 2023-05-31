import {useState} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

const Task = ({task, deleteTask}) => {
    
    const [isDone, setisDone] = useState(false);
    const handleDelete = () => {
        deleteTask(task.id);
    }
    const handleDone = () => {
        setisDone(!isDone); // Toggle the "isDone" state
    }
    return (
        <View style={styles.taskContainer}>
            <Text style={styles.text}>{task.task}</Text>
            <View style={styles.btnsContainer}>
                <Pressable 
                    onPress={handleDone}
                    style={styles.doneBtn}
                    >
                    <Text style={styles.doneBtnText}>{isDone ? 'Undo' : 'Done'}</Text>
                </Pressable>
                <Pressable 
                    onPress={handleDelete}
                    style={styles.deleteBtn}
                    >
                    <Text style={styles.deleteBtnText}>Delete</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    taskContainer: {
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between",
        padding:10,
        borderRadius:6,
        marginVertical:6,
        backgroundColor:"#EEE",
    },
    text: {
        // color:"",
        fontSize:18,
        // backgroundColor:"#121212",
    },
    btnsContainer: {
        display:'flex',
        gap:10,
        flexDirection:'row',
    },
    doneBtn : {
        backgroundColor:"#0079FF",
        padding:8,
        borderRadius:6,
    },
    doneBtnText: {
        color:"#FFF",
    },
    completed: {
        backgroundColor:"#121212",
        padding:8,
        borderRadius:6,
        color:"#FFF",
    },
    deleteBtn : {
        backgroundColor:"#FF2200",
        padding:8,
        borderRadius:6,
    },
    deleteBtnText: {
        color:"#FFF",
    },

})

export default Task;
