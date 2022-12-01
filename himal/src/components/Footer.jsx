import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' style={{backgroundColor: "#212121"}}>
      <MDBContainer className='p-4'>
              
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/himal.flex.9/' className='btn btn-outline-light btn-floating me-4'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='/' className='btn btn-outline-light btn-floating me-4'>
            <i className='fab fa-google'></i>
          </a>
          <a href='/' className='btn btn-outline-light btn-floating me-4'>
            <i className='fab fa-instagram'></i>
          </a>
        </div>
      </section>

        <section className='mb-4'>
        <p>Advertising Digitally Yours!</p>
        <p>You can't stop people printing what they want to print.</p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Products</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Tile Print
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Marriage Cards
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Badge 
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Ribbon
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Products</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Flex Banner
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Cup Print
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Vest Print
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    ID Card
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Details</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Your Account
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                     Become an Affiliate
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Shipping Rates
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Help
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Contact US</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='fas fa-home me-3 text-white '>
                    Dharan - 09, Acharya Line
                  </a>
                </li>
                <li>
                  <a href='#!' className='fas fa-envelope me-3 text-white '>
                    himalflex@gmail.com
                  </a>
                </li>
                <li>
                  <a href='#!' className='fas fa-phone me-3 text-white '>
                    +977 25-570674
                  </a>
                </li>
                <li>
                  <a href='#!' className='fas fa-phone me-3 text-white '>
                    +977 9862071414
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3'  style={{backgroundColor: "#F50057"}}>
        © 2022 Copyright :
        <a className='text-white' href='/'>
          Himal Flex Print
        </a>
      </div>
    </MDBFooter>
  );
}