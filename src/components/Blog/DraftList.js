import React, { Component } from 'react'
import Post from './Post'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'


export const DRAFTS_QUERY = gql`
  {
    postDrafts{
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

class DraftList extends Component {
  render() {
    return (
      <Query query={DRAFTS_QUERY}>
      
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
    
          const postsToRender = data.postDrafts
    
          return (
            <div>
              {postsToRender.map((post, index) => (
              <Post key={post.id} post={post} index={index}/>
              ))}
            </div>
          )
        }}
       
      </Query>    
    )
  }
}

export default DraftList