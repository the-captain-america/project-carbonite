
import React, { Component } from 'react';
import { PulseContainer, PulseItem } from './styles';

class CarbonitePulse extends Component {
		constructor(props) {
			super(props); 
			this.state = {
				transition: true,
			};
			this.stopAnimating = this.stopAnimating.bind(this);
			this.startAnimating = this.startAnimating.bind(this);
		}
		
		componentDidMount() {
			this.transitionTimer = setTimeout(this.stopAnimating, 200);
		}
		
		componentWillReceiveProps(nextProps) {
			if (nextProps.value !== this.props.value) {
				 this.startAnimating();
			 }
		}
		
		componentDidUpdate() {
			const { transitionDuration } = this.props;
			if (this.state.transition) {
				clearTimeout(this.transitionTimer);
				this.transitionTimer = setTimeout(this.stopAnimating, transitionDuration);
			}
		}
		
		componentWillUnmount() {
			clearTimeout(this.transitionTimer);
		}
		
		startAnimating() {
			console.log('start');
			this.setState({
				transition: true,
			});
		}
		stopAnimating() {
			this.setState({ transition: false });
		}
		
		render() {
			const { transition } = this.state;
			console.log(transition);
	
			return (
				<PulseContainer>
						{this.props.children}
						<PulseItem
							transitionDuration={this.props.transitionDuration}
							transitionDelay={0}
							transitionFillMode={'forwards'}
							transitionIterationCount={1}
							transition={transition}>
							{this.props.value}
						</PulseItem>
				</PulseContainer>
			);
		}
	}

	export default CarbonitePulse;

						