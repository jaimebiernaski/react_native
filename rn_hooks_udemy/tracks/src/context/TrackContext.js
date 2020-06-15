/**
 * All About saving + retrieving
 * existing tracks from API
 */

import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
const inititalState = [];

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_tracks': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const fetchTrack = (dispatch) => async () => {
  try {
    const response = await trackerApi.get('/tracks');
    dispatch({ type: 'fetch_tracks', payload: response.data });
  } catch (err) {
    console.log('Error Fetching data', err);
  }
};
const createTrack = (dispatch) => async (locations, trackName) => {
  try {
    await trackerApi.post('/tracks', { name: trackName, locations });
  } catch (err) {
    console.log('Error Posting', err);
  }
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTrack, createTrack },
  inititalState
);
