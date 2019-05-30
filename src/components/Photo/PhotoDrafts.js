import React from 'react'
import Photo from './Photo'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'


export const PHOTO_DRAFTS = gql`
  {
    photoDrafts{
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
    <Query query={PHOTO_DRAFTS}>
      
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>
        if (error) return <div>Error</div>
    
        const photosToRender = data.photoDrafts
    
        return (
          <div>
            {photosToRender.map((photo, index) => (
              <Photo key={photo.id} photo={photo} index={index}/>
            ))}
            <div>
            <a href='/photo/addphoto'>Add Draft</a>
            </div>
            <a href='/photo'>Cancel</a>
          </div>
        )
      }}       
    </Query> 
       
  )
}
