import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import SeachBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResult = (price) => {
    return results.filter((result) => result.price === price);
  };

  return (
    <>
      <SeachBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList title='Cost Effective' results={filterResult('$')} />
        <ResultsList title='Bit Pricier' results={filterResult('$$')} />
        <ResultsList title='Big Spender' results={filterResult('$$$')} />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
