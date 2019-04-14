import React from 'react';
import styled from 'styled-components';
import base from './theme';
import { css } from 'styled-components';

export const aspectRatio = (time, effect) => css`
	transition:           all ${time} ${effect};
	-webkit-transition:   all ${time} ${effect};
	-moz-transition:      all ${time} ${effect};
	-o-transition:        all ${time} ${effect};
	-ms-transition:       all ${time} ${effect};
`;

const Header = styled.header`
	top:0px;
	left:0px;
	position:fixed;
  overflow:hidden;
	display: flex;
	justify-content: center;
	align-items:center;
	flex-direction: column;
  background: ${base.color.primary};
  color: #fff;
	width:100%;
	font-family:'gillsans';
	z-index: ${base.zIndex.header};
  height:50px;
  text-align: center;
  border-bottom:2px solid ${base.color.base1};
  > .title {
    text-transform:uppercase;
    font-size: 120%;
    color:white;
    font-weight:bold;
  }
  .subtitle{
    text-align:center;
    font-size:12px;
    text-decoration:none;
  }
`;

const HeaderBar = ({ title, subtitle }) => (
  <Header>
    <div className="title">{title}</div>
    <div className="subtitle">{subtitle}</div>
  </Header>
);

export default HeaderBar;
