import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = ({task}) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.circle}></View>
                <Text style={styles.itemText}>{task}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    circle: {
        width: 24,
        height: 24,
        backgroundColor: '#FF6F91',
        opacity: 0.4,
        borderRadius: 50,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#FFC75F',
        borderWidth: 2,
        borderRadius: 5,
    },
})

export default Task;