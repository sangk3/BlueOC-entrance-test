import React from 'react';
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">
      <PostForm />
      <PostsList />
    </div>
  );
}

export default App;
