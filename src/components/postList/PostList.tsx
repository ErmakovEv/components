import * as React from 'react';
import { Component } from 'react';
import { IPost } from '../post/Post.types';
import Post from '../post/Post';

interface PostListProps {
  posts: IPost[];
}

class PostList extends Component<PostListProps> {
  render() {
    if (!this.props.posts.length) {
      return <h1 style={{ textAlign: 'center' }}>Пока новостей нет!</h1>;
    }
    return (
      <div>
        {this.props.posts.map((post) => (
          <Post post={post} key={post.title} />
        ))}
      </div>
    );
  }
}

export default PostList;
