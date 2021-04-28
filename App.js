import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contents from './contents/contents'

function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>
        Герасімов Станіслав
        {"\n"}
        Група ІВ-83
        {"\n"}
        ЗК ІВ-8304
      </Text>
    </View>
  );
}

function ItemScreen() {
  return (
    <View style={styles.container}>
      <Text>Item Screen</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
      tabBarOptions={
        { labelStyle: { paddingBottom: 5 } }}
    >
      <Tab.Screen
        name="General"
        component={AccountScreen}
        options={{
          tabBarLabel: 'General',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Item"
        component={ItemScreen}
        options={{
          tabBarLabel: 'Item',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  }
})

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
