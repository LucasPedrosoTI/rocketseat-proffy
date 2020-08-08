import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../Pages/TeacherList';
import Favorites from '../Pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

const StudyTabs = () => {
  const renderTabIcon = (name: string) => {
    return ({ color, size, focused }: any) => (
      <Ionicons name={name} size={size} color={focused ? '#8257e5' : color} />
    );
  };

  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d',
      }}
    >
      <Screen
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: renderTabIcon('ios-easel'),
        }}
        name="TeacherList"
        component={TeacherList}
      />
      <Screen
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: renderTabIcon('ios-heart'),
        }}
        name="Favorites"
        component={Favorites}
      />
    </Navigator>
  );
};

export default StudyTabs;
