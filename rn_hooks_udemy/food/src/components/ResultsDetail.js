import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
  const { image_url, name, rating, review_count } = result;
  return (
    <View style={styles.container}>
      {image_url ? (
        <Image style={styles.image} source={{ uri: image_url }} />
      ) : (
        <View style={styles.noImage} />
      )}

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.details}>
        {rating} Stars, {review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginVertical: 10,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 5,
  },
  noImage: {
    width: 250,
    height: 150,
    borderRadius: 5,
    backgroundColor: 'grey',
  },
  name: {
    width: 200,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 3,
  },
  details: {
    fontSize: 14,
    color: 'grey',
    marginBottom: 5,
  },
});

export default ResultsDetail;
