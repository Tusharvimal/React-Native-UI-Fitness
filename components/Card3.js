import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';

const Card3 = () => {
    return (
        <LinearGradient colors={[Colors.primaryColor, '#6666ff']} start={{ x: 1, y: 0.5 }} end={{ x: 0, y: 0 }} style={styles.container}>
            <View style={styles.cardView}>
                <Text style={{ fontSize: 60, color: 'white', fontWeight: 'bold', marginRight: 10, marginBottom: 10 }}>4</Text>
            </View>
            <Text style={styles.cardText} numberOfLines={2}>ONLY 4 moves for abs</Text>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 140,
        width: 140,
        borderRadius: 3,
        overflow: 'hidden',
        marginBottom: 15,
        marginRight: 15,
        marginLeft: 10,
        backgroundColor: Colors.primaryColor
    },
    cardView: {
        width: '60%',
        height: '60%',
        alignSelf: 'flex-end',
        backgroundColor: '#66a3ff',
        borderBottomLeftRadius: 100,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    cardText: {
        paddingHorizontal: 10,
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    }
})

export default Card3;
