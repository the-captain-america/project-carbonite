import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import { CarboniteIcon, CarboniteText } from "carbonite";
import DropdownMenu from "react-dd-menu";
import "react-dd-menu/dist/react-dd-menu.min.css";
import Breakpoint from "breakpoints";
import { media } from "helpers";

import { CarboniteOverlay } from "carbonite";
import { AnalyticsConfig } from "config";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	cursor: pointer;
	line-height:1;
	z-index: 9;

	.dd-menu {
		line-height: 1;
	}
	.dd-menu-items{
		display:flex;
		width:100%;
	}

	${media.mobile``};

	${media.tablet``};

	${media.extraSmallMobile``};
	}

	ul {}
	
	li{}
`;

const RowContainer = styled.div`
`;

const DropDownContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items:center;
	vertical-align:middle;
`;

class CarboniteDrop extends Component {
	constructor() {
		super();
		this.state = {
			isMenuOpen: false
		};
		this.click = this.click.bind(this);
		this.toggle = this.toggle.bind(this);
		this.close = this.close.bind(this);
	}

	toggle() {
		this.setState({ isMenuOpen: !this.state.isMenuOpen });
	}

	close() {
		this.setState({ isMenuOpen: false });
	}

	click(item) {
		this.props.onOptionClick(item);
	}

	render() {
		const { items, title, valueObj } = this.props;

		const menuOptions = {
			isOpen: this.state.isMenuOpen,
			close: this.close,
			toggle: (
				<DropDownContainer
					className={AnalyticsConfig.LINK_CLASS}
					onClick={this.toggle}
				>
					<Breakpoint name="desktopTablet">
						<CarboniteText nowrap variant="primary" size={12} bold>
							{title}
						</CarboniteText>
					</Breakpoint>
					<CarboniteText
						nowrap
						variant="primary"
						size={12}
					>
						{valueObj.label}
					</CarboniteText>
					<CarboniteIcon
						variant="primary"
						name={
							this.state.isMenuOpen
								? "arrow-up"
								: "arrow-down"
						}
						left={10}
						top={0}
						size={12}
					/>
				</DropDownContainer>
			),
			align: "left",
			animate: false
		};

		let dropDownOptions = items.map((item, index) => {
			const isSelected = item.value === valueObj.value;
			return (
				<li key={index}>
					<RowContainer
						className={AnalyticsConfig.LINK_CLASS}
						onClick={() => this.click(item)}
						key={index}
						isLast={index === items.length - 1}
					>
						<CarboniteText
							variant={isSelected ? "primary" : "primary"}
							bold={isSelected ? true : false}
							size={13}
						>
							{item.label}
						</CarboniteText>
					</RowContainer>
				</li>
			);
		});
		return (
			<Container>
				<div>
					<DropdownMenu {...menuOptions}>
						{dropDownOptions}
					</DropdownMenu>
				</div>
				{this.state.isMenuOpen &&
				<CarboniteOverlay status={this.state.isMenuOpen} zIndex={5} />}
			</Container>
		);
	}
}

CarboniteDrop.propTypes = {
	items: PropTypes.array,
	title: PropTypes.string,
	valueObj: PropTypes.object,
	onOptionClick: PropTypes.func,
};

export default CarboniteDrop;
