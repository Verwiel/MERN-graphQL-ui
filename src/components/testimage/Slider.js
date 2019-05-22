import React, { Component } from 'react'
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import './Slide.css'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'


const MY_PHOTOS = gql`{
  me{
    pictures{
      id
      published
      date
      title
      caption
      url
      location
    }
  }
}
`


export default class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [,,,],
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {

  }

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    
    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }

  render() {
    return (
      <Query query={MY_PHOTOS}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>
        if (error) return <div>Error</div>
        
        
        
        return (
          <main>
            <div className="slider">

              <div className="slider-wrapper"
                style={{
                transform: `translateX(${this.state.translateValue}px)`,
                transition: 'transform ease-out 0.45s'
                }}>

                {data.me.pictures.map((photo, index) => (
                  <Slide key={index} image={photo.url} />
                ))}

              </div>

              <LeftArrow
              goToPrevSlide={this.goToPrevSlide}
              />

              <RightArrow
              goToNextSlide={this.goToNextSlide}
              />
            </div>
          </main>
        )
      }}
      </Query>
    )
  }
}