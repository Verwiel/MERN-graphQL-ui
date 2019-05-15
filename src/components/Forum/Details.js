import React, { Component } from 'react'
import  { gql } from 'apollo-boost'
import { Query, Mutation } from 'react-apollo'

const GET_USER = gql`
  {
    me{
      posts{
        id
      }
    }
  }
`

const GET_POST = gql`
  query singlePost($id: ID!) {
    singlePost(id: $id) {
      id
      title
      content
      published
      author {
        id
      }
    }
  }
`

const PUBLISH_POST = gql`
  mutation publish($id: ID!) {
    publish(id: $id) {
      id
      published
    }
  }
`

const EDIT_POST = gql`
  mutation editPost($id: ID!, $title: String, $content: String) {
    editPost(id: $id, title: $title, content: $content) {
      id
      title
      content
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
  state = {
    title: '',
    content: ''
  }

  render() {
    const { match } = this.props
    const { title, content } = this.state
    return (
      <>
        <Query 
          query={GET_POST} 
          variables={{id: match.params.id}}
        >
          {({ loading, error, data }) => {
            if (loading) return <div>Loading...</div>
            if (error) return <div>Error</div>

          return (
            <>
            {data.singlePost.published && (
            <>
              <h4>{data.singlePost.title}</h4>
              <p>{data.singlePost.content}</p>
              <hr /> 
            </>
            )}
            {!data.singlePost.published && (
            <div>
            <form>
            <div className="flex flex-column mt3">
              <input
                className="mb2"
                type="text"
                placeholder={data.singlePost.title}
                value={title}
                onChange={e => this.setState({ title: e.target.value })}
              />

              <textarea
                className="mb2"
                placeholder={data.singlePost.content}
                cols={50}
                rows={8}
                value={content}
                onChange={e => this.setState({ content: e.target.value })}
              />

            </div>
            <Mutation
              mutation={!data.singlePost.published ? EDIT_POST: null}
              variables={{ id: match.params.id, title, content }}
              onCompleted={() => this.props.history.push(`/forum/drafts/${match.params.id}`)}
              >
              {editPost => <button onClick={editPost}
              disabled={!this.state.content || !this.state.title}
              >Update</button>}
            </Mutation>
            </form>
            <Mutation
              mutation={!data.singlePost.published ? PUBLISH_POST: null}
              variables={{ id: match.params.id }}
              onCompleted={() => this.props.history.push('/forum/drafts')}
            >
              {publish => <button onClick={publish}
              >Publish</button>}
            </Mutation>
            </div>
            )}

            <Query 
              query={GET_USER} 
            >
              {({ loading, error, data }) => {
                if (loading) return <div>Loading...</div>
                if (error) return <div>Error</div>
                const singlePostId = match.params.id
                
                const userId = data.me.posts.map(post => post.id === singlePostId)
                const idsMatch = userId.reduce((acc, curr) => acc ||curr)
              
                return (
                  <div>
                  { idsMatch && (
                    <Mutation
                      mutation={idsMatch ? DELETE_POST: null}
                      variables={{ id: match.params.id }}
                      onCompleted={() => this.props.history.push('/forum')}
                    >
                      {deletePost => <button onClick={deletePost}
                      >Delete</button>}
                    </Mutation>
                  )}
                  </div>
                )
              }}
            </Query>
          </>
          )}}
        </Query> 
        
        <div>        
          <a href='/forum'>cancel</a>
        </div>
      </>
    ) 
  }
}   
      
export default Details
