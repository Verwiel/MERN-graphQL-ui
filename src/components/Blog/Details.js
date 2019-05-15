import React, { Component } from 'react'
import  { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

const PUBLISH_POST = gql`
  mutation publish($id: ID!) {
    publish(id: $id) {
      id
      published
    }
  }
`

const DELETE_POST = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`

class Details extends Component {
  render() {
    const { match } = this.props
          
    return (
      <>
        <h1>ID: {match.params.id}</h1>
        <a href='/drafts'>go back</a>
        <p>edit (if unpublished)</p>
        <div>
          <Mutation
            mutation={DELETE_POST}
            variables={{ id: match.params.id }}
            onCompleted={() => this.props.history.push('/drafts')}
            >
            {deletePost => <button onClick={deletePost}
            >Delete</button>}
          </Mutation>
        
          <Mutation
            mutation={PUBLISH_POST}
            variables={{ id: match.params.id }}
            // onError={(err) => alert.error(err)}
            onCompleted={() => this.props.history.push('/')}
            >
            {publish => <button onClick={publish}
            >Publish</button>}
          </Mutation>
        </div>
      </>
    )
  }
}   
      
export default Details
