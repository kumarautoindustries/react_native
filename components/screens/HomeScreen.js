import * as React from 'react';
import { Button, View } from 'react-native';
const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications 5"
      />
    </View>
  );
}

export default HomeScreen;