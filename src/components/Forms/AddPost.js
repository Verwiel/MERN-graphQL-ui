import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const ADD_DRAFT = gql`
  mutation addDraft($title: String!, $content: String!) {
    createDraft(title: $title, content: $content) {
      id
      title
      content
    }
  }
`

export default (props) => {
  const [postState, setPost] = useState({
    title: "",
    content: ""
  })

  const updatePostField = event => {
    setPost({
      ...postState,
      [event.target.name]: event.target.value
    })
  }

  return (
    <Mutation 
      mutation={ADD_DRAFT}
      onCompleted={() => props.history.push('/forum/drafts')}
    >
      {addDraft => (
      <div>
        <h1>Add Post</h1>
        <form 
          onSubmit={e => {
            e.preventDefault()
            addDraft({ variables: { title: postState.title, content: postState.content } })
          }}>
          <input type="text"
            placeholder="Title" 
            name= "title"
            value={postState.title}
            onChange={updatePostField}
            required/>

          <input type="text"
            placeholder="Content" 
            name= "content"
            value={postState.content}
            onChange={updatePostField}/>

          <button type="submit">
            Submit
          </button>
        </form>
      </div>
      )}
    </ Mutation>
  )
}
