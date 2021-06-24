import React, { useState, useContext } from 'react';
import { 
    Keyboard, 
    KeyboardAvoidingView, 
    Platform, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View } from 'react-native';

import Task from './Task';
import { DataContext } from './DataProvider';

const MainComponent = () => {

    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useContext(DataContext);

    const handleAddTask = () => {
        Keyboard.dismiss()
        setTaskItems([...taskItems, task])
        setTask(null)
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }

    return (
            <View style={styles.container}>

                {/* today's tasks */}
                <View style={styles.tasksWrapper}>
                    <Text style={styles.sectionTitle}>Today's Tasks</Text>
                    <ScrollView
                        contentContainerStyle={{
                            flexGrow: 1
                        }}
                        keyboardShouldPersistTaps='handled'
                    >
                        <View style={styles.items}>
                            
                            {/* this is where the tasks will go! */}
                            {
                                taskItems.map((item, index) => {
                                    return (
                                        <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                            <Task task={item} />
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>

                    </ScrollView>

                </View>

                {/* write a task section */}
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.writeTaskWrapper}
                >
                    <TextInput style={styles.input} placeholder={'write a task'} value={task} onChangeText={text => setTask(text)} ></TextInput>

                    <TouchableOpacity onPress={() => { handleAddTask() }}>
                        <View style={styles.addWrapper}>
                            <Text style={styles.addText}>+</Text>
                        </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>

            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8eaed',
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
        height: 650,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 30,
        borderColor: '#c0c0c0',
        borderWidth: 1,
        width: 250,

    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c0c0c0',
        borderWidth: 1,
    },
    addText: {},
});

export default MainComponent;