import React, { Component } from 'react';
import HeaderBar from './HeaderBar';
import { Container, IncrementButton, Row } from './styles';
import { CarbonitePulse } from 'carbonite';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
		this.handleIncrement = this.handleIncrement.bind(this);
	}

	handleIncrement() {
		this.setState({
			value: this.state.value +1,
		});
	}
  
  render() {
    return (
			<Container>
				<HeaderBar
					title={'React Bookmark'} 
					subtitle={'Created by Philip Hultgren'} />
				<CarbonitePulse 
					transitionDuration={200}
					value={this.state.value}
				/>
				<Row>
          <IncrementButton onClick={this.handleIncrement}>
            Increment
          </IncrementButton>
        </Row>
			</Container>
    );
  }
}

export default Project;
