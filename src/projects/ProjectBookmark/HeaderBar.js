import React from 'react';
import { Header } from './styles';

const HeaderBar = ({ title, subtitle }) => (
  <Header>
    <div className="title">{title}</div>
    <div className="subtitle">{subtitle}</div>
  </Header>
);

export default HeaderBar;
