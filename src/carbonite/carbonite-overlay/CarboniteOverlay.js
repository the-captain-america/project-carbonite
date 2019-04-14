import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Overlay = styled.div`
	display: ${props => props.status === true ? 'block' : 'none'};
	width:100%;
	height:100%;
	position:fixed;
	left:0px;
	top:0px;
	// background:white;
	background: #080808;
	opacity:.4;
	z-index: ${props => props.zIndex};
`;

const CarboniteOverlay = ({ status, onPress, zIndex }) => (
	<Overlay onClick={onPress} status={status} zIndex={zIndex} />
);

CarboniteOverlay.PropTypes = {
	onPress: PropTypes.func,
	status: PropTypes.bool,
	zIndex: PropTypes.number,
};

export default CarboniteOverlay;