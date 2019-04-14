import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";

export const breakpoints = {
  desktop: "(min-width: 1025px)",
  mobileTablet: "(max-width: 1024px)",
  mobile: "(max-width: 736px)",
  tablet: "(min-width: 737px) and (max-width: 1024px)",
  desktopTablet: "(min-width: 737px)",
  screen: "(min-width: 1400px)",
  averageMobile: "(max-width: 480px)",
  extraSmallMobile: "(max-width: 320px)"
};

const Breakpoint = ({ children, name }) => {
  const breakpoint = name || "desktop";
  return (
    <MediaQuery query={breakpoints[breakpoint]}>
      {children}
    </MediaQuery>
  );
};

export default Breakpoint;

Breakpoint.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node
};
