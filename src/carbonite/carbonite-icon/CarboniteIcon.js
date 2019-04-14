import React from "react";
import PropTypes from "prop-types";
import iconList from "./iconList";

import { IconContainer } from "./styles";

const CarboniteIcon = ({
  name,
  size,
  variant,
  left,
  right,
  top,
  bottom,
  action,
  clickable,
  alignment,
  hoverVariant,
  shadow,
  currentColor,
  className,
  pointerEvents,
  opacity
}) => {
  const Icon = iconList[name];
  const cursor = action || clickable ? "pointer" : "inherit";

  return (
    <IconContainer
      pointerEvents={pointerEvents}
      size={size}
      variant={variant}
      left={left}
      right={right}
      top={top}
      bottom={bottom}
      onClick={action}
      cursor={cursor}
      alignment={alignment}
      hoverVariant={hoverVariant}
      shadow={shadow}
      currentColor={currentColor}
      className={className}
      opacity={opacity}
    >
      {Icon &&
        <svg
          className="icon"
          width={`${size}px`}
          height={`${size}px`}
          viewBox="0 0 500 500"
        >
          <Icon />
        </svg>}
    </IconContainer>
  );
};

CarboniteIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  variant: PropTypes.string,
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  action: PropTypes.func,
  clickable: PropTypes.bool,
  alignment: PropTypes.bool,
  hoverVariant: PropTypes.string,
  shadow: PropTypes.bool,
  currentColor: PropTypes.bool,
  className: PropTypes.string,
  pointerEvents: PropTypes.string,
	opacity: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
};

CarboniteIcon.defaultProps = {
  size: 16,
  variant: "white"
};

export default CarboniteIcon;
