import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ route }) => {
  const { id } = route.params;
  const [result, setResult] = useState([]);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) return;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{result.name}</Text>

        {result.location?.display_address?.map((element, index) => {
          return (
            <Text key={index} style={styles.address}>
              {element}
            </Text>
          );
        })}
      </View>

      <FlatList
        data={result.photos}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    margin: 10,
  },
  address: {
    fontSize: 16,
    color: 'grey',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 5,
    margin: 10,
  },
});

export default ResultsShowScreen;
