import createDataContext from './createDataContext';

const initialState = {
  currentLocation: null,
  locations: [],
  recording: false,
  trackName: '',
};

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'add_current_location': {
      return { ...state, currentLocation: action.payload };
    }
    case 'add_location': {
      return { ...state, locations: [...state.locations, action.payload] };
    }
    case 'start_recording': {
      return { ...state, recording: true };
    }
    case 'stop_recording': {
      return { ...state, recording: false };
    }
    case 'add_track_name': {
      return { ...state, trackName: action.payload };
    }
    case 'reset': {
      return { ...state, trackName: '', locations: [] };
    }
    default:
      return state;
  }
};

const startRecording = (dispatch) => () => {
  dispatch({ type: 'start_recording' });
};
const stopRecording = (dispatch) => () => {
  dispatch({ type: 'stop_recording' });
};
const addLocation = (dispatch) => (location, recording) => {
  dispatch({ type: 'add_current_location', payload: location });
  if (recording) {
    dispatch({ type: 'add_location', payload: location });
  }
};
const addTrackName = (dispatch) => (trackName) => {
  dispatch({ type: 'add_track_name', payload: trackName });
};

const reset = (dispatch) => () => {
  dispatch({ type: 'reset' });
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, addTrackName, reset },
  initialState
);
