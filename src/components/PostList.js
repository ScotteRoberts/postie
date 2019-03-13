import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import base from '../base';
import API from '../API';
import '../css/PostList.css';

export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      page: 1,
      likes: {},
    };
  }

  componentDidMount = () => {
    API.getAllPosts(this.state.page).then(response => this.setState({ posts: response.data }));

    this.ref = base.syncState('likes', {
      context: this,
      state: 'likes',
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.page !== this.state.page) {
      API.getAllPosts(this.state.page).then(response => this.setState({ posts: response.data }));
    }
  };

  handlePageChange = pageValue => {
    if ((this.state.page < 10 && pageValue > 0) || (this.state.page > 1 && pageValue < 0))
      this.setState(prevState => ({ page: prevState.page + pageValue }));
  };

  handleLike = postId => {
    this.setState(prevState => {
      const updatedLikes = {
        ...prevState.likes,
        [postId]: prevState.likes[postId] ? prevState.likes[postId] + 1 : 1,
      };

      return { likes: updatedLikes };
    });
  };

  render() {
    const { likes } = this.state;
    return (
      <div className="post-list container">
        <ul className="list">
          {this.state.posts.map(post => (
            <li key={post.id}>
              <p className="list-item-title">{post.title}</p>
              <Link to={`/posts/${post.id}`} className="details">
                Details
              </Link>
              <div className="likes">
                <button type="button" onClick={() => this.handleLike(post.id)}>
                  <span role="img" aria-label="thumbs up">
                    👍
                  </span>
                </button>
                <span>{likes[post.id] ? likes[post.id] : 0}</span>
              </div>
            </li>
          ))}
        </ul>

        <button type="button" onClick={() => this.handlePageChange(-1)}>
          &lt; Prev page
        </button>
        <span> {this.state.page} </span>
        <button type="button" onClick={() => this.handlePageChange(1)}>
          Next page &gt;
        </button>
      </div>
    );
  }
}
