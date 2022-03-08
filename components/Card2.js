import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const Card2 = props => {
    return (
        <View style={styles.card2}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKGjoH0P9_NIs5jyUuUWzQMmaKcu7APmemEfGvkQMzT8ztqJuqLc_HX-fjmGbYADdE0R8&usqp=CAU' }} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                <Text style={styles.info} numberOfLines={1}>{props.time}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card2: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 10
    },
    imageContainer: {
        width: '30%',
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    textContainer: {
        justifyContent: 'center',
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        width: '56%',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 17,
        fontWeight: "700",
        marginBottom: 5
    },
    info: {
        color: 'gray',
        fontSize: 15
    }
})

export default Card2;
