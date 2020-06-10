import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const initialState = [];
let postCounter = 0;

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts': {
      return action.payload;
    }
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
const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/blogposts');
    dispatch({ type: 'get_blogposts', payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async ({ title, content }) => {
    await jsonServer.post('/blogposts', { title, content });
    // dispatch({ type: 'add_blogpost', payload: post });
  };
};

const saveBlogPost = (dispatch) => {
  return async (post) => {
    await jsonServer.put(`/blogposts/${post.id}`, {
      title: post.title,
      content: post.content,
    });
    dispatch({ type: 'save_blogpost', payload: post });
  };
};

const deleteBlogPost = (dispatch) => {
  return async (postId) => {
    await jsonServer.delete(`/blogposts/${postId}`);
    dispatch({ type: 'remove_blogpost', payload: postId });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, saveBlogPost, getBlogPosts },
  initialState
);
