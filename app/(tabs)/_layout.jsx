import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Using Expo's built-in icons

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#10b981', // Green for active tab
        tabBarInactiveTintColor: '#6b7280', // Gray for inactive tab
        tabBarStyle: {
          backgroundColor: '#ffffff', // White background for tab bar
          borderTopColor: '#e5e7eb', // Light gray border
          paddingBottom: 8,
          height: 60,
        },
        headerStyle: {
          backgroundColor: '#ffffff', // White header
          borderBottomColor: '#e5e7eb', // Light gray border
        },
        headerTintColor: '#1f2937', // Dark gray header text
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown:false,
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          headerTitle: 'Mart Home', // Custom header title
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: 'Services',
          tabBarLabel: 'Services',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" size={size} color={color} />
          ),
          headerTitle: 'Mart Services', // Custom header title
        }}
      />
    </Tabs>
  );
}