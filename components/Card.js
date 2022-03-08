import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';

const Card = props => {
    return (
        <View style={[styles.imageContainer, props.style]}>
            <ImageBackground style={[styles.image, props.style]} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKZ2j3L-moA0RDgDB2unMEq47ih67HzwjeHQ&usqp=CAU' }}
                resizeMode='cover'
            >
                <Text style={[styles.imageText, props.style]}>{props.title}</Text>
                <Text style={styles.setText}>{props.workout}</Text>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: 140,
        borderRadius: 5,
        overflow: 'hidden',
        marginVertical: 10
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        padding: 15
    },
    imageText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5,
    },
    setText: {
        alignItems: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default Card;
