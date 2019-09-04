import React,{Component} from 'react';
import Carousel from 'nuka-carousel';
import staticImage from '../../static/images/no_image.png'

type Props = {
  photos: Object,
  imageURL: String,
  id: number
}

type State = {
  imageExist: boolean,
}

export class ImageGallery extends Component<Props,State> {
  state = {
    imageExist: true
  }

 render () {
  //Limit number of photos inside the gallery to be 5 
  const galleryPhotos = [...this.props.photos.slice(0,5)]
  const gallery = this.props.photos.length !== 0 ? //If the apartment does not have photos show default image (staticIamge)
   galleryPhotos.map(image => this.state.imageExist ? //Check if photo can be loaded from URL
    <img 
     src={`${this.props.imageURL}${image}.jpg`} 
     alt="original" 
     key={this.props.id}
     height="230"
     //error loading photo from URL
     onError={() => this.setState({imageExist: false})}
    /> : null
   ) : 
    <img src={`${staticImage}`} 
     alt="default" 
     key={this.props.id} 
     height="230" /> 

  return (
    <Carousel>
    {/* If photo can not be loaded from URL show static image */}
    {this.state.imageExist ? gallery : 
      <img src={`${staticImage}`} 
      alt="default" 
      key={this.props.id} 
      height="230"
      /> }
    </Carousel>
  )
 }
}

export default ImageGallery
