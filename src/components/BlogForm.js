import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { EditorState } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import { createPost } from '../redux/actions';
import { Button, TextField } from '@mui/material';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(createPost({ title, content: editorState.getCurrentContent().getPlainText() }));
    setTitle('');
    setEditorState(EditorState.createEmpty());
  };

  return (
    <div>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        placeholder="Write your blog post..."
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default BlogForm;
