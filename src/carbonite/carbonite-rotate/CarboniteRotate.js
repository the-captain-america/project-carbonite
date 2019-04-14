import styled from 'styled-components';

const CarboniteRotate = styled.span`
display: flex;
animation-timing-function: ease-in-out;
  ${props => props.rotateTo && `
      transform: rotate(${props.rotateTo}deg);
  `};
`;

CarboniteRotate.defaultProps = {
  rotateTo: 0,
};

export default CarboniteRotate;