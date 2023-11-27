import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {COLOR_BLACK, COLOR_WHITE} from '../../utils/colors';
import {moderateScale} from '../../utils/helper';
import {HomeScreenNavigationProp} from '../../screens';

type Props = {
  navigation: HomeScreenNavigationProp;
};

export const TwitterButton = ({navigation}: Props): JSX.Element => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation?.navigate('Feed')}>
      <Text style={styles.buttonText}>Sign in with Twitter</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR_BLACK,
    padding: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10),
  },
  buttonText: {
    color: COLOR_WHITE,
    fontSize: moderateScale(20),
  },
});
