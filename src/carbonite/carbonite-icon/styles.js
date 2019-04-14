import styled from "styled-components";

const getMarginValue = prop => props => {
  if (typeof props[prop] === "undefined") {
    return null;
  }

  const value = typeof props[prop] === "number"
    ? `${props[prop]}px`
    : props[prop];
  return `margin-${prop}: ${value};`;
};

export const IconContainer = styled.span`
  cursor: ${props => props.cursor};
  pointer-events: ${props => props.pointerEvents || "auto"};
  opacity: ${props => props.opacity};
  ${getMarginValue("left")}
  ${getMarginValue("right")}
  ${getMarginValue("top")}
  ${getMarginValue("bottom")}

  > svg {
    vertical-align: ${props => (props.alignment ? "initial" : "middle")};
    fill: ${props => (props.currentColor ? "currentColor" : props.theme.color[props.variant])};
    width: ${props => props.theme.size[props.size]}px;
    height: ${props => props.theme.size[props.size]}px;

    &:hover {
      fill: ${props => props.theme.color[props.hoverVariant]};
    }
  }
`;
