import React from 'react'

export default (props) => {
  return (
    <>
      <div className="flex mt2 items-start">
        <div className="flex items-center">
          <span className="gray">{props.index + 1}.</span>
        </div>
        <div className="ml1">
          <div>
            <a href={'/photo/'+ props.photo.id}>
            {props.photo.title}</a>
            ({props.photo.caption})
          </div>
          <div className="f6 lh-copy gray">
            on {' '}
            {props.photo.date
              ? props.photo.date
              : 'Unknown'}{' '}
          </div>

          {props.photo.published && (
          <div className="f6 lh-copy gray">
            Posted By: 
            {props.photo.creator.name}
          </div>
          )}
        </div>
      </div>
    </>
  ) 
}
