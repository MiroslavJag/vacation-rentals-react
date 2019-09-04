import styled from 'styled-components';

export const PlaceWrapper = styled.div`
 width: 95%;
 display: flex;
 flex-direction: column;
 margin: 1rem;
 box-shadow: 0 0 0.5rem rgba(0,0,0,.2);

 @media only screen and (min-width: 700px) {
   width: 45%;
 }
 @media only screen and (min-width: 1040px) {
   width: 30%;
 }
`

export const PlaceDetails = styled.div`
 flex-direction: column;
 padding: 10px;
 height: 150px;
 margin-bottom: 10px;
`

export const RatingWrapper = styled.div`
 display: flex;
 flex-direction: row;

 p {
  margin: 0;
  font-size: 15px;
  margin-top: 1px;
 }
 p:first-child {
  color: #0c6eef;
  font-weight: bold;
 }
 p:nth-child(3) {
  color: grey;
 }
 .star-ratings {
  margin: 0 5px;
 }
`
export const ProviderSection = styled.div`
 display: flex;
 justify-content: space-between;
 flex-direction: column;
 height: 70px;
}
`

export const ProviderWrapper = styled.div`
 display: flex;
 justify-content: space-between;
 flex-direction: row;
 align-items: flex-end;
 height: 100%;
 border-top: 1px solid lightgrey;
 padding: 10px;
`

export const OfferBtn = styled.button`
 padding: 13px;
 background-color: #0c6eef;;
 color: white;
 font-size: 17px;
 font-weight: bold;
 border-radius: 5px;
`