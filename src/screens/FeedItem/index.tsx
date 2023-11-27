import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {getDimensions, moderateScale} from '../../utils/helper';
import {COLOR_BLACK, COLOR_WHITE} from '../../utils/colors';
import Animated from 'react-native-reanimated';
import {backArrow} from '../../assets/images';
import {FeedScreenNavigationProp} from '../Feed';

type Props = {
  navigation: FeedScreenNavigationProp;
  route: {
    params: {
      item: {
        title: string;
        description: string;
        image: string;
      };
      index: number;
    };
  };
};
export const FeedItem = ({navigation, route}: Props) => {
  const {item, index} = route?.params;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation?.pop()}
        style={styles.backArrowStyle}>
        <Image source={backArrow} style={styles.backArrowImage} />
      </TouchableOpacity>
      <Animated.Image
        source={{uri: item?.image}}
        style={styles.imageView}
        sharedTransitionTag={'tag' + index}
      />
      <View style={styles.textContainer}>
        <Text style={styles.titleStyle}>{item?.title}</Text>
        <Text style={styles.descStyle}>{item?.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  imageView: {
    width: getDimensions()?.width,
    height: getDimensions()?.height * 0.4,
  },
  titleStyle: {
    color: COLOR_BLACK,
    fontSize: moderateScale(30),
    fontWeight: 'bold',
  },
  descStyle: {
    color: COLOR_BLACK,
    fontSize: moderateScale(15),
  },
  textContainer: {
    padding: moderateScale(10),
  },
  backArrowStyle: {
    position: 'absolute',
    zIndex: 1,
    top: moderateScale(15),
    left: moderateScale(15),
  },
  backArrowImage: {
    width: moderateScale(30),
    height: moderateScale(30),
    tintColor: COLOR_WHITE,
  },
});
