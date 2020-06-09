import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      let apiResult = await yelp.get(`/search`, {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'curitiba',
        },
      });
      setResults(apiResult.data.businesses);
    } catch (err) {
      console.log(err);
      setErrorMessage('Something went wrong!');
    }
  };

  useEffect(() => {
    searchApi('italian');
  }, []);
  //RETURN WHAT IS USED IN JSX
  return [searchApi, results, errorMessage];
};
