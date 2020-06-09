import createDataContext from './createDataContext';

const initialState = [];
let postCounter = 0;

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      postCounter++;
      return [
        ...state,
        { id: postCounter, title: `Blog Post #${postCounter}` },
      ];
    case 'remove_blogpost':
      return state.filter((post) => post.id !== action.payload);
    default:
      state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: 'add_blogpost' });
  };
};

const deleteBlogPost = (dispatch) => {
  return (postId) => {
    dispatch({ type: 'remove_blogpost', payload: postId });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  initialState
);
