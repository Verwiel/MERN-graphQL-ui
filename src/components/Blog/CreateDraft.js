import React, { Component } from 'react'
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

class CreateDraft extends Component {
  state = {
    title: '',
    content: ''
  }

  render() {
    const { title, content } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={title}
            onChange={e => this.setState({ title: e.target.value })}
            type="text"
            placeholder="A Title for the post"
            required
          />

          <textarea
            className="mb2"
            cols={50}
            onChange={e => this.setState({ content: e.target.value })}
            placeholder="Content"
            rows={8}
            value={content}
            required
          />

        </div>
        <Mutation
          mutation={ADD_DRAFT}
          variables={{ title, content }}
          onCompleted={() => this.props.history.push('/drafts')}
          >
          {addDraft => <button onClick={addDraft}
          disabled={!this.state.content || !this.state.title}
          >Submit</button>}
        </Mutation>
        </div>
    )
  }
}

export default CreateDraft