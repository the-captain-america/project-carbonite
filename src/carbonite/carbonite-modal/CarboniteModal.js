import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { CarboniteIcon } from 'carbonite';

const ModalContent = styled.div`
width:100%;
padding: 20px;
display: flex;
align-items: center;
justify-content: center;
`;

const ButtonTheme = styled.button`
display: flex;
transition: all 0.2s ease-in-out;
text-transform: uppercase;
justify-content: center;
vertical-align: middle;
align-items: center;
cursor: pointer;
border:none;
outline: none;
span {
  padding: 0px;
  line-height: 1.5;
}
&:hover {
  cursor:pointer;
  background: transparent;
  color: ${props => props.theme.color.primary};
}
&:focus {
  outline: none;
}
&:active {
  outline: none;
}
`;


const Modal = styled.div`
	display: ${props => props.status === true ? 'block' : 'none'};
	min-height: 400px;
	position:absolute;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
	top:100px;
	background:white;
	z-index: ${props => props.zIndex};
`;

const ModalControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ModalClose = ButtonTheme.extend`
  position: absolute;
`;

const CarboniteModal = ({ status, onPress, zIndex, children, controls }) => (
	<Modal onClick={onPress} status={status} zIndex={zIndex}>
    ${controls && (
      <ModalControls>
        <ModalClose>
          <CarboniteIcon
            name="close"
            size={30}
            variant="primary"
          />
        </ModalClose>
      </ModalControls>
    )}
    <ModalContent>
      {children}
    </ModalContent>
  </Modal>
);

CarboniteModal.PropTypes = {
  controls: PropTypes.func,
	onPress: PropTypes.func,
	status: PropTypes.bool,
	zIndex: PropTypes.number,
};

export default CarboniteModal;