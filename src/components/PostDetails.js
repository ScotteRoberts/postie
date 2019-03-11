import React, { Component } from 'react';
import API from '../API';
import '../css/PostDetails.css';

export default class PostDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
      comments: [],
      postedBy: {},
    };
  }

  componentDidMount = async () => {
    const postResponse = await API.getPost(this.props.match.params.postId);
    this.setState({ post: postResponse.data });

    const userResponse = await API.getUser(postResponse.data.userId);
    this.setState({ postedBy: userResponse.data });

    const commentsResponse = await API.getPostComments(this.props.match.params.postId);
    this.setState({ comments: commentsResponse.data });
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
