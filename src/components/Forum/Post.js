import React, { Component } from 'react'

class Post extends Component {
  render() {
    return (
      <>
      <div className="flex mt2 items-start">
      
        <div className="flex items-center">
          <span className="gray">{this.props.index + 1}.</span>
        </div>
        <div className="ml1">
          <div>
            <a href={'/forum/'+ this.props.post.id}>
            {this.props.post.title}</a>
            ({this.props.post.content})
          </div>
          <div className="f6 lh-copy gray">
            Author: {' '}
            {this.props.post.author
              ? this.props.post.author.name
              : 'Unknown'}{' '}
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Post