import createDataContext from './createDataContext';

const initialState = [];
let postCounter = 0;

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      postCounter++;

      return [...state, { ...action.payload, id: postCounter }];

    case 'remove_blogpost':
      return state.filter((post) => post.id !== action.payload);
    case 'save_blogpost':
      return state.map((post) => {
        return post.id === action.payload.id ? action.payload : post;
      });
    default:
      state;
  }
};

const addBlogPost = (dispatch) => {
  return (post) => {
    dispatch({ type: 'add_blogpost', payload: post });
  };
};

const saveBlogPost = (dispatch) => {
  return (post) => {
    dispatch({ type: 'save_blogpost', payload: post });
  };
};

const deleteBlogPost = (dispatch) => {
  return (postId) => {
    dispatch({ type: 'remove_blogpost', payload: postId });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, saveBlogPost },
  initialState
);
