import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Card from './Card';

const Column = props => {
    return (
        <View style={styles.column}>
            <Text style={styles.columnText}>{props.title}</Text>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    column: {
        marginTop: 30,
        marginHorizontal: 15,
    },
    columnText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    }
})

export default Column;
