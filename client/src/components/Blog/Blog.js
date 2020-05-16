import React, { useState, useEffect } from 'react';
import butter from '../../butter-client';
import PostSnippet from './PostSnippet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Typography } from '@material-ui/core';
import './Blog.css';

const Blog = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await butter.post.list({
        page: 1,
        page_size: 10,
      });
      setData(response.data);
    } catch (e) {
      setError(`There was an error: ${e.message}`);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const getPosts = () => (
    <div>
      {data.data.map((post, i) => (
        <PostSnippet {...post} key={i} />
      ))}
    </div>
  );

  const getContent = () => {
    if (loading) return <p>Fetching posts...</p>;
    if (error) return <p>{error}</p>;
    if (!data) return null;
    return getPosts();
  };

  return (
    <Container>
      <CssBaseline />
      <div className="blog-container">
        <Typography variant="h3" style={{ textAlign: 'center' }}>
          mittens' blog
        </Typography>
        {getContent()}
      </div>
    </Container>
  );
};

export default Blog;
