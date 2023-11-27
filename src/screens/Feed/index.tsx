import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {getDimensions, moderateScale} from '../../utils/helper';
import {COLOR_BLACK, COLOR_CREAM, COLOR_WHITE} from '../../utils/colors';
import {AppStackParamList} from '../../navigation/homeNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Animated from 'react-native-reanimated';

const data = [
  {
    title: 'Item 1',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    image:
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT1Zo9USSzvn7sWI0jPPH7j4mfetlETM6pC8RvGZpRrhSzEoKnX',
  },
  {
    title: 'Item 2',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    image:
      'https://pbs.twimg.com/profile_images/1439953850471911426/s4pE9SYa_400x400.jpg',
  },
];

export type FeedScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'Feed'
>;

type Props = {
  navigation: FeedScreenNavigationProp;
};

type dataTypes = {
  title: string;
  description: string;
  image: string;
};

export const Feed = ({navigation}: Props) => {
  const renderItem = useCallback(
    ({item, index}: {item: dataTypes; index: number}) => {
      return (
        <TouchableOpacity
          key={index}
          style={[styles.dataView, index % 2 !== 0 ? styles.oddCard : {}]}
          onPress={() => navigation?.navigate('FeedItem', {item, index})}>
          <Animated.Image
            source={{uri: item?.image}}
            style={styles.imageView}
            sharedTransitionTag={'tag' + index}
          />
          <Text style={styles.titleTextView}>{item?.title}</Text>
          <Text style={styles.descTextView}>
            {item?.description?.substring(0, 60) + '...'}
          </Text>
        </TouchableOpacity>
      );
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data as ArrayLike<dataTypes>}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
    padding: getDimensions()?.width * 0.04,
  },
  dataView: {
    width: getDimensions()?.width * 0.45,
    height: moderateScale(250),
    backgroundColor: COLOR_CREAM,
    borderRadius: moderateScale(20),
  },
  oddCard: {
    marginLeft: getDimensions()?.width * 0.02,
  },
  imageView: {
    width: getDimensions()?.width * 0.45,
    height: moderateScale(150),
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  titleTextView: {
    color: COLOR_BLACK,
    padding: moderateScale(10),
    fontWeight: 'bold',
  },
  descTextView: {
    color: COLOR_BLACK,
    paddingLeft: moderateScale(10),
  },
});
