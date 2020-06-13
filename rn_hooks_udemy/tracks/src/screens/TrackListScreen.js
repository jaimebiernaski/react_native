import React from 'react';
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TrackListScreen = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title='Details'
          onPress={() => {
            navigation.navigate('TrackDetail');
          }}
        />
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <Text>TrackListScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default TrackListScreen;
