// inputs: title, content
import React, { useState } from 'react';


export default () => {
  const [postState, setPost] = useState({
    title: "",
    content: ""
  })

  const updateField = (event: any) => {
    setPost({
      ...postState,
      [event.target.name]: event.target.value
    });
  }

  const printValues = (event: any ) => {
    event.preventDefault()
    console.log(postState.title,postState.content);
  }

  return (
    <>
      <h1>Add Post</h1>
      <form onSubmit={printValues}>
        <input type="text"
          placeholder="Title" 
          name= "title"
          value={postState.title}
          onChange={updateField}/>

        <input type="text"
          placeholder="Content" 
          name= "content"
          value={postState.content}
          onChange={updateField}/>

        <input type="submit"
          name="submit"
          value="Submit"/>

      </form>
    </>
  );
}
