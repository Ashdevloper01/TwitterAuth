import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TwitterButton} from '../../components';
import {AppStackParamList} from '../../navigation/homeNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {COLOR_WHITE} from '../../utils/colors';

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export const Home = ({navigation}: Props) => {
  return (
    <View style={styles.buttonView}>
      <TwitterButton navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_WHITE,
  },
});
