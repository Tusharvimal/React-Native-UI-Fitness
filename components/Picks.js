import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Picks = props => {
    return (
        <View style={styles.picks}>
            <Text style={styles.picksText}>{props.title}</Text>
            <ScrollView horizontal={true} style={{ paddingHorizontal: 10 }}>
                {props.children}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    picksText: {
        marginVertical: 10,
        fontWeight: 'bold',
        fontSize: 20,
        paddingLeft: 20
    }
})

export default Picks;
