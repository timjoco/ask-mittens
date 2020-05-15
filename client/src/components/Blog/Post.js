import React from 'react';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './Blog.css';

const Post = (props) => {
  const data = props.location.state;

  return (
    <Container>
      <CssBaseline />
      <div>
        <div>
          <h1>{data.title}</h1>
          <hr />
          <div className="author">
            <img src={data.author.profile_image} alt="Author" />
            <div>
              Published by{' '}
              <strong>
                {data.author.first_name} {data.author.last_name}
              </strong>{' '}
              on {moment(data.published).format('MMMM Do, YYYY')}
            </div>
          </div>
          <hr />
          <div
            dangerouslySetInnerHTML={{ __html: data.body }}
            className="post-body"
          />
          <hr />
          <Link to="/blog">&larr; Back to the posts list</Link>
        </div>
      </div>
    </Container>
  );
};

export default Post;
