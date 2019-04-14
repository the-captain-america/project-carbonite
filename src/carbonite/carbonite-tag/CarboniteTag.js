import React from 'react';
import PropTypes from 'prop-types';
import { CarboniteTrim } from '../../carbonite';

const CarboniteTag = ({ text }) => (
  <span>
    <CarboniteTrim text={text} length={10} />
  </span>
);

CarboniteTag.propTypes = {
  text: PropTypes.string,
};

CarboniteTag.defaultProps = {
  text: 'Tag Item',
};

export default CarboniteTag;
