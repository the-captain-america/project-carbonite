// style-utils.js
import React from 'react';
import { css } from 'styled-components';

import { breakpoints } from './breakpoints';

// Prevent PropType warning by removing unwanted props from a component
export const componentWithoutProps = (Component, ignoreProps = []) => (props) => {
  const filteredProps = { ...props };
  ignoreProps.forEach(prop => {
    if (prop in filteredProps) {
      delete filteredProps[prop];
    }
  });

  return (
     <Component {...filteredProps} />
  );
};

export const getStyle = (map, fallback) => props => {
  const keysFromProps = Object.keys(map).filter(
    key => props[key] !== undefined
  );
  const keyFromProps = keysFromProps[0];
  if (map[keyFromProps]) {
    return map[keyFromProps];
  }
  if (fallback) {
    if (props[fallback] && map[props[fallback]]) {
      return map[props[fallback]];
    }
  }
  return undefined;
};

export const boolStyle = (key, value) => props => {
  return props[key] ? value : null;
};

export const aspectRatio = (x, y) => css`
position: relative;

&::after {
	display: block;
	width: 100%;
	height: 100%;
	padding-top: ${100 * (y / x)}%;
	content: '';
	z-index: -1;
}
`;

const getMediaBreakpoints = () => {
  const media = {};

  Object.keys(breakpoints).forEach((breakpoint) => {
    media[breakpoint] = (...args) => css`
      @media ${breakpoints[breakpoint]} {
        ${css(...args)}
      }
    `;
  });

  return media;
};

export const media = getMediaBreakpoints();

//Mindful of this usage.. perfromant operation.
export const getView = () => {

  const mediaQueryMobile = window.matchMedia(breakpoints.mobile);
  if(mediaQueryMobile.matches) return "mobile";

  const mediaQueryTablet = window.matchMedia(breakpoints.tablet);
  if(mediaQueryTablet.matches) return "tablet";
  
  else return "desktop";
}
