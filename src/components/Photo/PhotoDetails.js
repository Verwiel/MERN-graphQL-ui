import React, { Component } from 'react'
import  { gql } from 'apollo-boost'
import { Query, Mutation } from 'react-apollo'

const GET_USER = gql`
  {
    me{
      pictures{
        id
      }
    }
  }
`

const GET_PHOTO = gql`
  query singlePhoto($id: ID!) {
    singlePhoto(id: $id){
      id
      published
      date
      title
      caption
      url
      location
      creator{
        id
      }
    }
  }
`

const PUBLISH_PHOTO = gql`
  mutation publishPhoto($id: ID!) {
    publishPhoto(id: $id) {
      id
      published
    }
  }
`

const EDIT_PHOTO = gql`
  mutation editPhoto($id: ID!, $date: String!, $location: String, $title: String, $caption: String) {
    editPhoto(id: $id, date: $date, location: $location, title: $title, caption: $caption) {
      id
      date
      location
      title
      caption
    }
  }
`

const DELETE_PHOTO = gql`
  mutation deletePhoto($id: ID!) {
    deletePhoto(id: $id) {
      id
    }
  }
`

class PhotoDetails extends Component {
  state = {
    date: '',
    location: '',
    title: '',
    caption: ''
  }

  render() {
    const { match } = this.props
    const { date, location, title, caption } = this.state
    return (
      <>
        <Query 
          query={GET_PHOTO} 
          variables={{id: match.params.id}}
        >
          {({ loading, error, data }) => {
            if (loading) return <div>Loading...</div>
            if (error) return <div>Error</div>

          return (
            <>
            {data.singlePhoto.published && (
            <>
              <h4>{data.singlePhoto.title}</h4>
              <p>{data.singlePhoto.caption}</p>
              <p>{data.singlePhoto.date}</p>
              <p>{data.singlePhoto.location}</p>
              <p>{data.singlePhoto.creator.name}</p>
              <hr /> 
            </>
            )}
            {!data.singlePhoto.published && (
            <div>
            <form>
            <div className="flex flex-column mt3">
              <input
                className="mb2"
                type="text"
                placeholder={data.singlePhoto.title}
                value={title}
                onChange={e => this.setState({ title: e.target.value })}
              />

              <input
                className="mb2"
                type="text"
                placeholder={data.singlePhoto.caption}
                value={caption}
                onChange={e => this.setState({ caption: e.target.value })}
              />

              <input
                className="mb2"
                type="date"
                placeholder={data.singlePhoto.date}
                value={date}
                onChange={e => this.setState({ date: e.target.value })}
              />

              <input
                className="mb2"
                type="text"
                placeholder={data.singlePhoto.location}
                value={location}
                onChange={e => this.setState({ location: e.target.value })}
              />
            </div>


            <Mutation
              mutation={!data.singlePhoto.published ? EDIT_PHOTO: null}
              variables={{ id: match.params.id, title, caption, date, location }}
              onCompleted={() => this.props.history.push(`/photo/drafts/${match.params.id}`)}
              >
              {editPhoto => <button onClick={editPhoto}
              disabled={!this.state.caption || !this.state.title || !this.state.date || !this.state.location}
              >Update</button>}
            </Mutation>
            </form>
            <Mutation
              mutation={!data.singlePhoto.published ? PUBLISH_PHOTO: null}
              variables={{ id: match.params.id }}
              onCompleted={() => this.props.history.push('/photo/drafts')}
            >
              {publishPhoto => <button onClick={publishPhoto}
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
                const singlePhotoId = match.params.id
                
                const userId = data.me.pictures.map(picture => picture.id === singlePhotoId)
                const idsMatch = userId.reduce((acc, curr) => acc ||curr)
              
                return (
                  <div>
                  { idsMatch && (
                    <Mutation
                      mutation={idsMatch ? DELETE_PHOTO: null}
                      variables={{ id: match.params.id }}
                      onCompleted={() => this.props.history.push('/photo')}
                    >
                      {deletePhoto => <button onClick={deletePhoto}
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
          <a href='/photo'>cancel</a>
        </div>
      </>
    ) 
  }
}   
      
export default PhotoDetails
