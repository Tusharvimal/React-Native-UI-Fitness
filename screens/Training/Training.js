import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Card from '../../components/Card';
import Column from '../../components/Column';
import Stats from '../../components/Stats';
import Colors from '../../constants/Colors';

const Training = props => {
    const { navigation } = props;
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Ionicons name='gift' size={24} color='#ccc' />
                )
            }
        })
    }, [navigation])

    return (
        <ScrollView contentContainerStyle={styles.screen} showsVerticalScrollIndicator={false}>
            <LinearGradient colors={[Colors.primaryColor, '#66a3ff']} start={{ x: 0.60, y: 0 }} end={{ x: 0, y: 0 }} style={styles.statsContainer}>
                <Stats />
            </LinearGradient>
            <View style={styles.goal}>
                <View style={styles.weekGoal}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>WEEK GOAL</Text>
                </View>
                <View style={styles.setGoal}>
                    <Text style={{ color: 'gray' }} >Set weekly goals for a better body shape</Text>
                </View>
                <Pressable style={styles.setGoalButton}>
                    <Text style={styles.pressableText}>SET A GOAL</Text>
                </Pressable>
            </View>
            <Column title='7X4 CHALLENGE'>
                <Card title='FULL BODY' workout='7x4 CHALLENGE' />
                <Card title='LOWER BODY' workout='7x4 CHALLENGE' />
            </Column>
            <Column title='BEGINNER'>
                <Card title='ABS BEGINNER' style={{ justifyContent: 'flex-start' }} />
                <Card title='CHEST BEGINNER' style={{ justifyContent: 'flex-start' }} />
            </Column>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flexGrow: 1
    },
    statsContainer: {
        backgroundColor: Colors.primaryColor,
        height: 200,
        overflow: 'visible',
    },
    goal: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 2,
        backgroundColor: 'white',
        marginHorizontal: 15,
        marginTop: -110,
        padding: 20,
        borderRadius: 10
    },
    setGoal: {
        marginVertical: 15,
        alignItems: 'center',
    },
    setGoalButton: {
        borderRadius: 30,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        padding: 15,
        width: '90%',
        alignSelf: 'center'
    },
    pressableText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    }
})

export default Training;
