import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { fonts } from '../../src/utils/fonts';

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontFamily: fonts.SemiBold }}>Welcome to my home screen</Text>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications 5"
        />
      </View>
    </>
  );
}

export default HomeScreen;