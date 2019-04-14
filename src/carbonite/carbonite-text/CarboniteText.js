import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

// font-family: ${props => (props.bold ? props.theme.fonts.bold : props.theme.fonts.default)}; 

const TextItem = styled.span`
	text-transform: ${props => props.theme.fontCase[props.fontCase]};
  color: ${props => props.theme.color[props.variant]};
  font-family: ${props => props.theme.fonts[props.family]};
  line-height: ${props => props.lineHeight ? props.lineHeight : '25' }px;
  font-weight: ${props => props.bold ? props.bold : 'normal'};
  text-align: ${props => props.textAlign ? props.textAlign : 'center'};
  opacity: ${props => (props.opacity ? props.opacity : 1)};
  font-size: ${props => props.theme.size[props.size] || props.size}px;
`;

const CarboniteText = (props) => {
  const {
    className,
    children,
    variant,
    size,
    bold,
    family,
    fontCase,
    textAlign,
    lineHeight,
    opacity,    
  } = props;

  return (
    <TextItem
      variant={variant}
      size={size}
      bold={bold}
      textAlign={textAlign}
      lineHeight={lineHeight}
      family={family}
			fontCase={fontCase}
      opacity={opacity}
      className={`${className}`}
    >
      {children}
    </TextItem>
  );
};

CarboniteText.propTypes = {
  variant: PropTypes.string,
  bold: PropTypes.bool,
  family: PropTypes.string,
  lineHeight: PropTypes.number,
  textAlign: PropTypes.string,
	fontCase: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  opacity: PropTypes.string,
  className: PropTypes.string
};

export default CarboniteText;
