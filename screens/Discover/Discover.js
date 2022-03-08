import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Card1 from '../../components/Card1';
import Picks from '../../components/Picks';
import Card from '../../components/Card';
import Card2 from '../../components/Card2';
import Card3 from '../../components/Card3';
import Colors from '../../constants/Colors';

const Discover = props => {
    const { navigation } = props;
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Ionicons name='calendar' size={24} color='black' />
                )
            }
        })
    }, [navigation])

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.containerHolder}>
                <Card1 style={styles.enhancedCard} />
            </View>
            <View style={styles.picks}>
                <Picks title='Picks for you'>
                    <View style={styles.cardHolder}>
                        <Card2 title='Belly fat burner HIIT' time='14 min • Beginner' />
                        <Card2 title='Lose fat (NO JUMPING)' time='15 min • Intermediate' />
                    </View>
                    <View style={styles.cardHolder}>
                        <Card2 title='HIIT killer core' time='14 min • Beginner' />
                        <Card2 title='Ripped v-cut abs sculpting' time='12 min • Beginner' />
                    </View>
                    <View style={styles.cardHolder}>
                        <Card2 title='Build wider shoulders' time='13 min • Intermediate' />
                        <Card2 title='HIIT intermediate' time='13 min • Intermediate' />
                    </View>
                    <View style={styles.cardHolder}>
                        <Card2 title='Fat burning HIIT' time='10 min • Intermediate' />
                    </View>
                </Picks>
            </View>
            <View style={styles.containerHolder}>
                <Card title='Best quarantine workout' workout='5 workouts' />
            </View>
            <View style={styles.picks}>
                <Picks title='For beginners'>
                    <Card3 />
                    <Card3 />
                    <Card3 />
                </Picks>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    containerHolder: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    enhancedCard: {
        height: 175,
    },
    cardHolder: {
        height: 240,
        width: 310
    }
})

export default Discover;
