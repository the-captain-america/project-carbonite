import React, { Component } from 'react';
import { CarboniteText } from 'carbonite';
import CarboniteItem from './CarboniteItem';
// import Breakpoint from '../../../utils/breakpoints';
import { StorageUtils } from '../../../utils';
import { getData } from './data';

import {
	Navigation,
	ButtonPrimary,
	Overlay,
	Indicators,
	IndicatorItem,
	IndicatorContainer,
	CarboniteContainer,
	BottomRow,
	TopRow,
	Item,
	ButtonLight,
} from './styles';

class CarboniteIntro extends Component {
	  constructor(props) {
    super(props);
    this.state = {
			activeItem: 0,
			currentIndex: 0,
		};
		this.setActiveItem = this.setActiveItem.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleStart = this.handleStart.bind(this);
	}

	componentDidMount() {
		const change_management = true;
		StorageUtils.storeChangeManagement(change_management);
	}

	setActiveItem(index, flag) {
		let nextIndex = index;

		switch(flag){
			case 'prev' : nextIndex = nextIndex -1; break;
			case 'next' : nextIndex = nextIndex +1; break;
			default : break;
		}
		this.setState({
			activeItem: nextIndex,
		});
	}

	handleClose() {
		this.setState({
			activeItem: 0,
			overlay: false,
		});
		this.props.handleChangeManagement();
	}

	handleStart() {
		this.setState({
			activeItem: 0,
		});
		this.props.handleChangeManagement();
		this.props.onFocus();
	}

	handlePrev() {
		this.setState({
			activeItem: this.state.activeItem -1,
		});
	}

	getData() {
		return getData({
			extend: this.props.extend,
			size: this.props.view
		});
	}

	updateActiveItem(index) {
		let resetIndex;
		if (index > this.getData().length) {
			resetIndex = 0;
		} else {
			resetIndex = index;
		}
		this.setState({
			activeItem: resetIndex,
		});
	}

	render() {
		const { activeItem } = this.state;
		const { changeManagement, view } = this.props;

		const data = this.getData();

		const indicators = (
			<IndicatorContainer>
				<Indicators>
					{data.map((item, index) => {
						return (
						<IndicatorItem 
							key={item.id}
							className={index === activeItem ? 'active-indicator' : ''}
							onClick={this.updateActiveItem.bind(this, index) }>
								{index+1}
						</IndicatorItem>
						)
					},this)
					}
				</Indicators>
			</IndicatorContainer>
		);

		const controls = (
			<Navigation>
				<TopRow>
					{indicators}
				</TopRow>

				<BottomRow>
				<Item>
				{activeItem > 0 && (
					<ButtonLight onClick={this.setActiveItem.bind(this, activeItem, 'prev')}>
						<CarboniteText variant="primary" bold size={10}>
							Prev
						</CarboniteText>
					</ButtonLight>
				)}
				</Item>


				<Item>
				{(activeItem !== data.length-1) && (
					<ButtonLight onClick={this.handleStart}>
						<CarboniteText variant="primary" bold size={10}>
							Skip
						</CarboniteText>
					</ButtonLight>
				)}

				{activeItem === data.length-1 ? (
					<ButtonPrimary onClick={this.handleStart}>
						<CarboniteText variant="white" bold size={10}>
							{`Start Searching`}
						</CarboniteText>
					</ButtonPrimary>
				) : (
					<ButtonPrimary onClick={this.setActiveItem.bind(this, this.state.activeItem, 'next')}>
						<CarboniteText variant="white" bold size={10}>
							Next
						</CarboniteText>
					</ButtonPrimary>
				)}
				</Item>
				</BottomRow>
			</Navigation>
		);

		const slide = data[activeItem];
		return (
			<CarboniteContainer changeManagement={changeManagement}>
				<CarboniteItem
					key={slide.id}
					data={slide}
					view={view}
					extend={this.props.extend}
					tranistion={changeManagement}
					onPressClose={this.handleClose}
					changeManagement={changeManagement}
					>
					{controls}

				</CarboniteItem>
				<Overlay onClick={this.handleClose} toggleOverlay={changeManagement} />
			</CarboniteContainer>
		);
	}
}

CarboniteIntro.defaultProps = {
	changeManagement: true,
};

export default CarboniteIntro;