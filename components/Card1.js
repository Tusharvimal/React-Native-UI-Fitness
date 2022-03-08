import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';

const Card = props => {
    return (
        <View style={[styles.imageContainer, props.style]}>
            <ImageBackground style={styles.image} source={{ uri: 'https://images.squarespace-cdn.com/content/v1/537b0649e4b0f6c6b6877a35/1591098871497-99T7NTJSRQ23F8LFTEAH/legs+sprinting+across+the+road+running+fast.jpg?format=1500w' }}
                resizeMode='cover'
            >
                <Text style={styles.imageText}>4 MIN Tabata</Text>
                <Text style={styles.setText} numberOfLines={2}>The most effective workout fro fat burning. High intensity workouts ...</Text>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: 130,
        borderRadius: 5,
        overflow: 'hidden',
        marginVertical: 10
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    imageText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 5,
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    setText: {
        alignItems: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 15,
        marginBottom: 25
    }
})

export default Card;
