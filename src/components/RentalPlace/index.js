import React from 'react';
import {PlaceWrapper, PlaceDetails, RatingWrapper, ProviderSection, ProviderWrapper, OfferBtn} from './style'
import ImageGallery from '../ImageGallery'
import {STATIC_URL_IMAGES} from '../../consts'
import StarRatings from 'react-star-ratings';

type Props = {
  photoDirectory: String,
  id: number,
  rating: number,
  countOfFeedbacks: number,
  teaser: String,
  title: String,
  providerLogoUrl: String
}

const RentalPlace = (props: Props) => {
 //Create URL for loading images 
 const imageURL=`${STATIC_URL_IMAGES}${props.photoDirectory}/${props.id}/t/`

 //Reduce title length after 40 characters adding three dots
 const reducePlaceTiteLength = content => {
  return content.length > 40
    ? `${content.substr(0, 37)}...`
    : content
  }
  //Calculate place rating based on precentage 
  const ratingValue = (props.rating / 100 * 50) /10
  //Show rating section if it is available
  const rating = props.rating !== 0 ?
   <RatingWrapper>
    <p>{ratingValue.toFixed(1)}</p> 
    <StarRatings
      rating={ratingValue}
      starRatedColor="#0c6eef"
      starDimension="15px"
      starSpacing="0" />
    <p>{`${props.countOfFeedbacks}${props.countOfFeedbacks === 1 ? ' review' : ' reviews'}`}</p>
    </RatingWrapper> : null

    //Replace m2 html symbol with a string inside the teaser
    const teaser = props.teaser.replace('m&sup2;', 'm2')

 return (
  <PlaceWrapper>
   <ImageGallery 
    photos={props.photos}
    imageURL={imageURL} 
    id={props.id}/>
    <PlaceDetails>
     <h3>{reducePlaceTiteLength(props.title)}</h3>
     <p>{teaser}</p>
     {rating}
    </PlaceDetails>
    <ProviderSection>
      <ProviderWrapper>
       <img src={props.providerLogoUrl} alt="prviderLogo" height="15px" />
       <OfferBtn>View Offer</OfferBtn>
      </ProviderWrapper>
     </ProviderSection>
  </PlaceWrapper>
 )
}

export default RentalPlace
