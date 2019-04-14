
import React from 'react';
import {
	EndingSoonContainer,
	GoingGoneContainer,
	ClosingTodayContainer,
	NationDeliveryContainer,
} from './styles';
import CarboniteTag from './CarboniteTag';

export const EndingSoon = ({ text }) => (
  <EndingSoonContainer>
    <CarboniteTag text={text} />
  </EndingSoonContainer>
);

export const GoingGone = ({ text }) => (
  <GoingGoneContainer>
    <CarboniteTag text={text} />
  </GoingGoneContainer>
);

export const ClosingToday = ({ text }) => (
  <ClosingTodayContainer>
    <CarboniteTag text={text} />
  </ClosingTodayContainer>
);

export const NationDelivery = ({ text }) => (
  <NationDeliveryContainer>
    <CarboniteTag text={text} />
  </NationDeliveryContainer>
);
