import React, { Component } from 'react';
import PropTypes from 'prop-types';
import API from '../API';
import '../css/PostDetails.css';

export default class PostDetails extends Component {
  static propTypes = {
    match: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      post: {},
      comments: [],
      postedBy: {},
    };
  }

  componentDidMount = () => {
    this.getPostWithUser();
    this.getComments();
  };

  getPostWithUser = async () => {
    const post = (await API.getPost(this.props.match.params.postId)).data;
    this.setState({ post });
    const postedBy = (await API.getUser(post.userId)).data;
    this.setState({ postedBy });
  };

  getComments = async () => {
    const comments = (await API.getPostComments(this.props.match.params.postId)).data;
    this.setState({ comments });
  };

  render() {
    const { post, postedBy, comments } = this.state;
    return (
      <div className="post-details container">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>Posted by {postedBy.name}</p>

        <div className="comments">
          <h3>Comments</h3>
          <ul className="list">
            {comments.map(comment => (
              <li key={comment.id}>
                <h4>{comment.name}</h4>
                <p>{comment.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
