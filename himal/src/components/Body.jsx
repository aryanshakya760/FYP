import React from 'react';
import abc from './image/a.jpg';
import bas from './image/b.jpg';
import ahk from './image/c.jpg';
import lkl from './image/d.jpg';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement
} from 'mdb-react-ui-kit';

export default function Body() {
  return (
    <MDBCarousel showControls  dark fade>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src={abc} alt='...' />
        </MDBCarouselItem>
        
        <MDBCarouselItem>
          <MDBCarouselElement src={bas} alt='...' />
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src={ahk} alt='...' />
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src={lkl} alt='...' />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}