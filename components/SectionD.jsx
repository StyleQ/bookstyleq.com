import React from 'react';
import styled, { keyframes } from 'styled-components';
import Container from './Container';
import Text from './Typography';
import Divider from '../assets/divider-three.svg';
import Pin from './Pin';
import Service from './Service';
import { Grid, Column } from './Grid';

const heartRelease = keyframes`
  0%{
    transform: translateY(-3rem) scale(.2);
    opacity: 1;
  }
  100%{
    transform: scale(1) translateY(-2rem);
    opacity: 0;
  }
`;

const Root = styled.section`
  position: relative;
  padding: 25rem 0 0;
  text-align: center;
  overflow: hidden;
  > svg{
    position: absolute;
    top: -.1rem;
    left: 0;
    width: 100vw;
  }
  #heart-path{
    transform-origin: bottom;
    animation: ${heartRelease} 1s linear infinite;
  }
  @media not all and (min-resolution:.001dpcm) {
    @media {
        #heart-path{
          animation: none;
        }
    }
  }
  ${Grid} {
    margin: 12rem 0;
  }
`;

export default () => (
  <Root>
    <Divider />
    <Container>
      <Pin centered>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path id="heart-path" d="m59.873 39.484 6.635 6.585c.634.625 1.652.622 2.281-.006l6.61-6.61 6.609-6.61c4.247-4.248 4.394-11.091.108-15.35l-.089-.095c-.017-.018-.034-.034-.051-.051-1.978-1.961-4.499-2.972-7.064-3.077-2.566-.105-5.175.485-7.324 2.148-4.31-3.304-10.447-3.418-14.388.582h-.2v.424c-4 4.271-4.155 11.219.135 15.476z" />
          <path d="m98.553 58.714c-.992-2.347-2.951-3.423-4.477-3.646-1.525-.224-2.779.208-2.779.208-.058.018-.117.039-.173.063l-17.234 8c.021-.214.069-.475.069-.693 0-3.635-3.012-6.646-6.661-6.646h-14.363c-.062 0-.132-.209-.189-.312-.257-.464-.535-.884-.834-1.319-.6-.869-1.282-1.661-2.035-2.399-3.015-2.953-7.444-4.764-12.038-4.764l-17.839.014v-1.921c0-.894-.207-1.299-1.101-1.299h-8.088-8.088c-.894 0-1.723.405-1.723 1.298v32.354c0 .895.829 1.348 1.723 1.348h8.088 8.088c.894 0 1.101-.453 1.101-1.348v-3.185l32.872 10.825c.035.012.2.021.237.031 3.471.881 7.53.365 10.585-1.63l31.452-17.075c.007-.006.048-.013.054-.019l.8-.436c0-.003 0-.005 0-.007 2-1.475 3.718-4.685 2.553-7.442zm-4.184 4.633-.758.429-31.412 17.068c-.041.023-.082.049-.121.076-2.13 1.431-5.441 1.908-8.031 1.258l-33.592-11.066c-.065-.021-.455-.038-.455-.05v-20.614l17.833-.006c3.743 0 7.222 1.473 9.646 3.849.606.594 1.221 1.242 1.702 1.939.24.349.497.709.702 1.081.254.459.441.563.578.882l.432.807h1.422 14.982c1.938 0 3.425 1.648 3.425 3.522 0 1.367-.808 2.6-1.99 3.126l-.151.112c-.396.153-.724.269-1.187.269 0 0-16.395.027-22.395.027-1 0-1 2.943 0 2.943h22.292c.652 0 1.272.021 1.87-.153.215-.021.423-.011.613-.112l.044.017c.061-.025.117-.038.177-.064l22.352-10.354c.015-.016.563-.172 1.244-.071.695.102 1.355.294 1.953 1.709.534 1.259.057 2.675-1.175 3.376z" />
        </svg>
      </Pin>
      <Text as="strong" className="intro">Top Services We Offer</Text>
      <Text as="h2">SERVING SATISFACTION AND BEYOND</Text>
      <Grid columns={4}>
        <Column>
          <Service name="BARBERING" image="https://res.cloudinary.com/strich/image/upload/v1586812341/styleq-barber_qdzqvx.jpg" />
        </Column>
        <Column>
          <Service name="HAIRCUTS/TRIMS" image="https://res.cloudinary.com/strich/image/upload/v1586812341/styleq-hairstylist_ekzegg.jpg" />
        </Column>
        <Column>
          <Service name="BRAIDS/LOCKS" image="https://res.cloudinary.com/strich/image/upload/v1586812341/styleq-braids_urotsx.jpg" />
        </Column>
        <Column>
          <Service name="BLOWOUTS" image="https://res.cloudinary.com/dnk42vfsu/image/upload/v1594331972/website/photo-of-woman-wearing-white-tank-top-3696351_cbla75.jpg" />
        </Column>
        <Column>
          <Service name="TWISTOUTS" image="https://res.cloudinary.com/strich/image/upload/v1586812341/styleq-natural_zku8ba.jpg" />
        </Column>
        <Column>
          <Service name="EXTENTIONS/SEW-INS" image="https://res.cloudinary.com/dnk42vfsu/image/upload/v1594335130/website/woman-in-black-and-white-checked-mini-skirt-and-brown-coat-3597932_mtgbg4.jpg" />
        </Column>
        <Column>
          <Service name="MAKEUP" image="https://res.cloudinary.com/dnk42vfsu/image/upload/v1594329766/website/oz-seyrek-8_8zPKmKe0k-unsplash_1_zdcknv.jpg" />
        </Column>
        <Column>
          <Service name="MANICURES/PEDICURES" image="https://res.cloudinary.com/dnk42vfsu/image/upload/v1594333262/website/person-in-black-gloves-massaging-fingers-3997383_pbmwby.jpg" />
        </Column>
      </Grid>
    </Container>
  </Root>
);
