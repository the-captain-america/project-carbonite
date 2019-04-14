import React from 'react';
import { CarboniteText, CarboniteIcon } from 'carbonite';
import {
	Header,
	HeaderTitle,
	HeaderSubtitle,
	HeaderButton,
	HeaderClose,
	CloseContainer,
	Tip,
}
from './styles';
import PropTypes from 'prop-types';

const CarboniteHeader = ({ title, subtitle, onPress, isOpen, status, toolTip }) => (
  <Header isOpen={isOpen}>
		<HeaderTitle>
		<CarboniteText
			variant={'white'}
			size={20}
			family={'primary'}
			fontCase={'lowercase'}
		>
      {title}
		</CarboniteText>
		</HeaderTitle>
    <HeaderSubtitle>{subtitle}</HeaderSubtitle>
    <HeaderButton
      onClick={onPress}
			status={false}>
      {status === false ? 
				<CarboniteText
					size={12}
					variant="white"
				>
					Create
				</CarboniteText> : (
				<CarboniteText
					size={12}
					variant="white"
				>
					Close
				</CarboniteText>
			)}
    </HeaderButton>
		<CloseContainer className="close-container">
				<HeaderClose
					className="close"
					onClick={onPress}>
					<CarboniteIcon
						size={20}
						variant="white"
						name={'close'}
					/>
					<Tip className="tool-tip">
						{toolTip}
					</Tip>
				</HeaderClose>
		</CloseContainer>
  </Header>
);

CarboniteHeader.defaultProps = {
	toolTip: 'Close bar',
};

CarboniteHeader.PropTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	onPress: PropTypes.func,
	status: PropTypes.string,
	toolTip: PropTypes.string,
}

export default CarboniteHeader;
