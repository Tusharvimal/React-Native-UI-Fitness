import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Training from '../screens/Training/Training';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import Discover from '../screens/Discover/Discover';
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native';

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white'
    }
}

const Stack = createNativeStackNavigator()

const TrainingNav = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerBackground: () => {
                    return (
                        <LinearGradient colors={[Colors.primaryColor, '#66a3ff']} start={{ x: 0.60, y: 0 }} end={{ x: 0, y: 0 }} style={{ flex: 1 }}>
                        </LinearGradient>
                    )
                }
            }}
        >
            <Stack.Screen
                name='Training'
                component={Training}
                options={{
                    title: 'HOME WORKOUT',
                    headerTitleStyle: {
                        color: 'white'
                    }
                }}
            />
        </Stack.Navigator>
    )
}

const DiscoverNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Discover'
                component={Discover}
                options={{
                    title: 'DISCOVER'
                }}
            />
        </Stack.Navigator>
    )
}

const Tabs = createBottomTabNavigator();

const FitNavigation = () => {
    return (
        <NavigationContainer theme={MyTheme}>
            <Tabs.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: Colors.primaryColor,
                    tabBarInactiveTintColor: Colors.accentColor,
                }}
            >
                <Tabs.Screen
                    name='TrainingNav'
                    component={TrainingNav}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => {
                            if (focused) {
                                color = Colors.primaryColor
                            }
                            return (
                                <Ionicons name='time' size={25} color={color} />
                            )
                        },
                        title: 'Training'
                    }}
                />
                <Tabs.Screen
                    name='DiscoverNav'
                    component={DiscoverNav}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => {
                            if (focused) {
                                color = Colors.primaryColor
                            }
                            return (
                                <Ionicons name='compass' size={25} fontWei color={color} />
                            )
                        },
                        tabBarActiveTintColor: Colors.primaryColor,
                        tabBarInactiveTintColor: Colors.accentColor,
                        title: 'Discover'
                    }}
                />
                <Tabs.Screen
                    name='ReportNav'
                    component={TrainingNav}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => {
                            if (focused) {
                                color = Colors.primaryColor
                            }
                            return (
                                <Ionicons name='stats-chart' size={25} color={color} />
                            )
                        },
                        tabBarActiveTintColor: Colors.primaryColor,
                        tabBarInactiveTintColor: Colors.accentColor,
                        title: 'Report'
                    }}
                />
                <Tabs.Screen
                    name='SettingsNav'
                    component={TrainingNav}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => {
                            if (focused) {
                                color = Colors.primaryColor
                            }
                            return (
                                <Ionicons name='person' size={25} color={color} />
                            )
                        },
                        tabBarActiveTintColor: Colors.primaryColor,
                        tabBarInactiveTintColor: Colors.accentColor,
                        title: 'Settings'
                    }}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

export default FitNavigation