import React from 'react';
import {Feed, FeedItem, Home} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type AppStackParamList = {
  Home: undefined;
  Feed: undefined;
  FeedItem: {
    item: {
      title: string;
      description: string;
      image: string;
    };
    index: number;
  };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const HomeNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="FeedItem" component={FeedItem} />
    </Stack.Navigator>
  );
};
