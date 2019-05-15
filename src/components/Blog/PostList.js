import React, { Component } from 'react'
import Post from './Post'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export const FEED_QUERY = gql`
  {
    postFeed{
      id
      title
      content
      published
      author {
        name
      }
    }
  }
`

class PostList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
    
          const postsToRender = data.postFeed
    
          return (
            <div>
              {postsToRender.map((post, index) => (
              <Post key={post.id} post={post} index={index} isDraft={!post.published} />
              ))}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default PostList