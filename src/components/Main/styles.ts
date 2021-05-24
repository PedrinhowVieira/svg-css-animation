import styled from 'styled-components'

export const Svg = styled.svg`
  cursor: pointer;

  #magGroup {
    fill: #ed285e;
  }
  #yelGroup {
    fill: #fcce43;
  }

  #mag1,
  #yel1,
  #mag2 {
    transition: all 1s ease;
  }
  #mag2 {
    transform: translateX(-100%);
  }
  :hover #yel1 {
    transform: translateX(20%);
  }
  :hover #mag1 {
    transform: translateX(40%);
    opacity: 0;
  }
  :hover #mag2 {
    transform: translateX(0%);
  }
`
