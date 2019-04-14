
import React, { Component } from 'react';
import { CarboniteText, CarboniteIcon } from 'carbonite';
import {
	CarboniteContainer,
	HeaderSection,
	TitleSection,
	ContentSection,
	CloseButton,
	Content,
	HeadingSection,
} from './styles';

class CarboniteItem extends Component {

	render() {
		const {
			data,
			onPressClose,
			isVisible,
			localStorage,
		} = this.props;

		return (
		<CarboniteContainer
			transition={isVisible}
			localStorage={localStorage}
			transitionDuration={300}
			transitionDelay={200}
			caretX={data.caretX}
			positionY={data.positionY}
			positionX={data.positionX}
			positionXDesktop={data.positionXDesktop}
			backgroundImage={data.backgroundImage}
		>

			<HeaderSection>
				{this.props.view === 'mobile' ? (
					<TitleSection>
						<CarboniteText
							bold size={14}
							variant="primary"
						>
							Journey
						</CarboniteText>
					</TitleSection>
				): (
					<TitleSection>
						{data.title && (
							<CarboniteText
								bold size={14}
								variant="white"
							>
								{data.title}
							</CarboniteText>
						)}
					</TitleSection>
				)}

				<CloseButton onClick={onPressClose}>
					<CarboniteIcon
						name="close"
						variant={this.props.view === 'mobile' ? 'primary' : 'secondary'}
						size={8}
					/>
				</CloseButton>
			</HeaderSection>
				<ContentSection view={this.props.view}>
					<Content>
						<HeadingSection>
							{data.icon && (
							<div style={{ paddingRight: '10px' }}>
								<CarboniteIcon
									name={data.icon ? data.icon : ''}
									variant="base1"
									size={20}
								/>
							</div>
							)}
							<div>
								<CarboniteText variant="base1" bold size={14}>
									{data.sub}
								</CarboniteText>
							</div>
						</HeadingSection>

						<CarboniteText variant="base4" size={12}>
							{data.details}
						</CarboniteText>
					</Content>
				</ContentSection>
				{this.props.children}
			</CarboniteContainer>
		);
	}
}

export default CarboniteItem;
