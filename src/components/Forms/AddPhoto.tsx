// add popup confirmation with publish and edit
import React, { useState } from 'react'


export default () => {
  const [photoState, setPhoto] = useState({
    title: "",
    caption: "",
    date: "",
    location: "",
    url: ""
  })

  const updatePhotoField = (event: any) => {
    setPhoto({
      ...photoState,
      [event.target.name]: event.target.value
    })
  }

  const printValues = (event: any ) => {
    event.preventDefault()
    console.log(photoState.title,photoState.caption, photoState.date, photoState.location, photoState.url)
  }

  return (
    <>
      <h1>Add Photo</h1>
      <form onSubmit={printValues}>
        <input type="text"
          placeholder="Title" 
          name= "title"
          value={photoState.title}
          onChange={updatePhotoField}/>

        <input type="text"
          placeholder="Caption" 
          name= "caption"
          value={photoState.caption}
          onChange={updatePhotoField}/>

        <input type="text"
          placeholder="Date" 
          name= "date"
          value={photoState.date}
          onChange={updatePhotoField}/>

        <input type="text"
          placeholder="Location" 
          name= "location"
          value={photoState.location}
          onChange={updatePhotoField}/>

        <input type="text"
          placeholder="URL" 
          name= "url"
          value={photoState.url}
          onChange={updatePhotoField}/>

        <input type="submit"
          name="submit"
          value="Submit"/>

      </form>
    </>
  )
}
