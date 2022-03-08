import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Colors from '../constants/Colors';

const Stats = props => {
    return (
        <ScrollView contentContainerStyle={{ ...props.style, ...styles.stats }}>
            <View style={styles.info}>
                <Text style={styles.infoNum}>0</Text>
                <Text style={styles.infoText}>WORKOUT</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.infoNum}>0</Text>
                <Text style={styles.infoText}>KCAL</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.infoNum}>0</Text>
                <Text style={styles.infoText}>MINUTE</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    stats: {
        width: '100%',
        flexDirection: 'row',
        height: 90,
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 10,
        alignItems: 'center'
    },
    info: {
        alignItems: 'center'
    }, infoNum: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    infoText: {
        color: 'white'
    }
})

export default Stats;
