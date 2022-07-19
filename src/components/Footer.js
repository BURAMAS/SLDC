import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import blue_wave from '../assets/blue_wave.svg'

const FooterStyle = styled.div`
  background-color: #347deb;
  //padding-top: 10rem;
  height: 65vh;
  overflow-y: hidden;

 
  a{
    color: white;
  }

  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
    color: white;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
    color: white;
  }
  .footer__col1__title {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: white;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    color: white;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        .copy{
          color: white;
        }
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <img src={blue_wave} alt='bwave'/>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Stepney Laundry</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
          </p>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about-us',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact-us',
              },
              {
                type: 'Link',
                title: 'Gallery',
                path: '/gallery',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact"
            links={[
              {
                title: '02037299007',
                
              },
              {
                title: '@gmail.com',
                path: 'mailto:@gmail.com',
              },
              {
                title: '102 White Horse Lane London E1 4LR',
                path: 'https://www.google.com/maps/place/102+White+Horse+Ln,+London+E1+4QS/@51.5214357,-0.0473024,17z/data=!3m1!4b1!4m5!3m4!1s0x48761d2996788b05:0x914c84ea1d5828c6!8m2!3d51.5214357!4d-0.0451137',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p className='copy'>
            © 2022 - Stepney Laundrette & Dry Clean | Designed & Developed By Ebrima Saidy
          </p>
        </div>
      </div>
    </FooterStyle>
  );
}
