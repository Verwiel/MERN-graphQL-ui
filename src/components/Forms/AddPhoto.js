// add popup confirmation with publish and edit
import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const ADD_PHOTO = gql`
  mutation addPhoto($date: String!, $location: String!, $url: String!, $title: String!, $caption: String!) {
    addPhoto(date: $date, location: $location, url: $url, title: $title, caption: $caption) {
      date
      title
      caption
      url
      location
    }
  }
`

export default (props) => {
  const [photoState, setPhoto] = useState({
    date: "",
    location: "",
    url: "",
    title: "",
    caption: ""
  })

  const updatePhotoField = event => {
    setPhoto({
      ...photoState,
      [event.target.name]: event.target.value
    })
  }

  return (
    <Mutation 
      mutation={ADD_PHOTO}
      onCompleted={() => props.history.push('/photo/drafts')}
    >
      {addDraft => (
      <div>
        <h1>Add Photo</h1>
        <form 
          onSubmit={e => {
            e.preventDefault()
            addDraft({ variables: { date: photoState.date, location: photoState.location, url: photoState.url, title: photoState.title, caption: photoState.caption } })
          }}>
          <input type="text"
            placeholder="Title" 
            name= "title"
            value={photoState.title}
            onChange={updatePhotoField}
            required
          />

          <input type="text"
            placeholder="Caption" 
            name= "caption"
            value={photoState.caption}
            onChange={updatePhotoField}
          />

          <input type="date"
            placeholder="Date" 
            name= "date"
            value={photoState.date}
            onChange={updatePhotoField}
            required
          />

          <input type="text"
            placeholder="Location" 
            name= "location"
            value={photoState.location}
            onChange={updatePhotoField}
            required
          />

          <input type="url"
            placeholder="URL" 
            name= "url"
            value={photoState.url}
            onChange={updatePhotoField}
            required
          />

          <button type="submit">
            Submit
          </button>
        </form>
      </div>
      )}
    </Mutation>
  )
}
