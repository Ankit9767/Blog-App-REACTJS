export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const TOGGLE_THEME = 'TOGGLE_THEME';

let nextPostId = 1;

export const createPost = (post) => ({
  type: CREATE_POST,
  payload: { ...post, id: nextPostId++ },
});

export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id,
});

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});
