import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Particles from 'react-particles-js';

import businessSvg from '../images/business.svg';
import ideaSvg from '../images/idea.svg';
import communicationSvg from '../images/communication.svg';

const CardWrapper = styled.div`
  width: 330px;
  height: 500px;
  background: var(--white);
  box-shadow: 0 15px 35px rgba(0, 0, 100, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const CardHeader = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CardLogoBackground = styled.div`
  width: 180px;
  height: 180px;
  background: linear-gradient(45deg, ${(props) => props.color1}, ${(props) => props.color2});
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  position: relative;

  &:before {
    content: '';
    width: 160px;
    height: 160px;
    background: white;
    position: absolute;
    top: 7%;
    left: 50%;
    transform: translateX(-50%);
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  }

  &:after {
    content: '';
    width: 150px;
    height: 150px;
    background: linear-gradient(45deg, ${(props) => props.color1}, ${(props) => props.color2});
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  }
`;

const SVG = styled.img`
  position: absolute;
  width: 60px;
  margin-top: 1.5rem;
`;

const StyledParticles = styled(Particles)`
  position: absolute;
  top: 0;
`;

const CardBody = styled.div`
  width: 70%;
  height: 60%;
`;

const CardTitle = styled.h2`
  text-align: center;
  line-height: 2rem;
`;

const CardText = styled.p`
  font-size: 0.8rem;
  text-align: center;
  margin-top: 1rem;
  line-height: 1.6rem;
`;

const CardFooter = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  font-size: 0.8rem;
  font-weight: 600;
  color: dodgerblue;
`;

const Card = ({ title, text, CardLogoBackgroundColor1, CardLogoBackgroundColor2, cardImg }) => {
  return (
    <CardWrapper>
      <CardHeader>
        <StyledParticles
          params={{
            particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                  value_area: 500,
                },
              },
              shadow: {
                enable: true,
                color: '#3CA9D1',
                blur: 1,
              },
              move: {
                speed: 0.5,
              },
              size: {
                value: 5,
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05,
                },
              },
            },
          }}
        />
        <CardLogoBackground color1={CardLogoBackgroundColor1} color2={CardLogoBackgroundColor2} />
        <SVG
          src={
            cardImg === 'businessSvg'
              ? businessSvg
              : cardImg === 'ideaSvg'
              ? ideaSvg
              : cardImg === 'communicationSvg' && communicationSvg
          }
          alt=''
        />
      </CardHeader>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </CardBody>
      <CardFooter>
        <StyledLink to='/blog/'>Read more</StyledLink>
      </CardFooter>
    </CardWrapper>
  );
};

export default Card;
