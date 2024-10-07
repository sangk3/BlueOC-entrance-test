export const fetchPosts = () => {
    return async (dispatch) => {
      dispatch({ type: 'FETCH_POSTS_REQUEST' });
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_POSTS_FAILURE', payload: error.message });
      }
    };
  };
  
  export const addPost = (post) => {
    return async (dispatch) => {
      // do endpont của typicode không hỗ trợ POST fake POST
      const newPost = { id: Date.now(), ...post }; // Giả lập ID cho bài viết mới
      dispatch({ type: 'ADD_POST', payload: newPost });
    };
  };
  