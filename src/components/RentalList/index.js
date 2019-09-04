import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import RentalPlace from '../RentalPlace'
import {ListWrapper, SpinnerWrapper} from './style'
import { MetroSpinner } from "react-spinners-kit";

type Props = {
  initData: Object
}

export class RentalList extends Component<Props> {

  componentDidMount() { 
    //Get initial data from Redux
    this.props.onInitApartments();
  }

  render() {
    //Get all aprtment simples from all apartments in one array
    const getAllApartments = (initData) => {  
      const allContent = []
      if (initData) {
        this.props.initData.map(place =>  
          place.apartmentSimples.map(item => 
            allContent.push(item)))
      } return allContent
    }
    //If apartment exist get all desired properties, until that show the Spinner
    const content = this.props.initData ? 
      getAllApartments(this.props.initData).map(place => 
        <RentalPlace key={place.apartmentId}
          id = {place.apartmentId}
          title = {place.holiduShortTitle}
          minDayPrice = {place.minDayPrice}
          teaser = {place.teaser}
          rating = {place.rating}
          provider = {place.provider}
          photos = {place.photos}
          photoDirectory = {place.providerPhotoDirectory}
          countOfFeedbacks = {place.countOfFeedbacks}
          providerLogoUrl = {place.providerConfiguration.logoUrl}
        /> 
      ) : 
      <SpinnerWrapper>
        <MetroSpinner
        size={50}
        color="#0c6eef"
        loading={true}/>
      </SpinnerWrapper>

    return (
      <ListWrapper>
        {content}
      </ListWrapper>
    )
  }
}

//Get state from the redux
const mapStateToProps = state => {
    return {
        initData: state.apartments
    };
}

//Dispatch the action for initial data
const mapDispatchToProps = dispatch => {
    return {
        onInitApartments: () => dispatch(actions.getApartmentsData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RentalList);
