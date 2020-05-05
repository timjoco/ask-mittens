import React from 'react';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';
import './Blog.css';

const Post = (props) => {
  const data = props.location.state;
  return (
    <div className="page-container">
      <div className="content-wrap">
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
        <div dangerouslySetInnerHTML={{ __html: data.body }} />
        <hr />
        <Link to="/home/blog">&larr; Back to the posts list</Link>
      </div>
    </div>
  );
};

export default Post;
