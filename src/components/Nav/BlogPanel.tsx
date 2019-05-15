import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'

const GET_DOGS = gql`
  {
    postFeed {
        id
        title
        content
        published
      
    }
  }
`

export default () => {
  const { data, error, loading } = useQuery(GET_DOGS);
  if (loading) {
    return <div>Loading...</div>;
  };
  if (error) {
    return `Error! ${error.message}`;
  };

  return (
    <>
    <h1>Feed</h1>
    <ul>
      {/* {data.dogs.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))} */}
    </ul>
    </>
  );
};

// include postFeed, filter, add(link to form)