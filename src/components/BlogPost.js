import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../redux/actions';
import { Button, Card, CardContent, Typography } from '@mui/material';

const BlogPost = ({ post }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="body2">{post.content}</Typography>
        <Button variant="contained" color="secondary" onClick={handleDelete}>
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogPost;
