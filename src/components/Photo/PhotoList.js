import React from 'react'
import Photo from './Photo'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export const PHOTO_FEED = gql`
  {
    picFeed{
      id
      published
      date
      title
      caption
      url
      location
      creator{
        id
        name
      }
    }
  }
`

export default () => {
  return (
    <Query query={PHOTO_FEED}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>
        if (error) return <div>Error</div>
    
        const photosToRender = data.picFeed
    
        return (
          <div>
            {photosToRender.map((photo, index) => (
              <Photo key={photo.id} photo={photo} index={index} />
            ))}
          </div>
        )
      }}
    </Query>
  )
}
