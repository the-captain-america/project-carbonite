import React, { Component } from 'react';
//import ContentContainer from '../ContentContainer';
import { CarboniteHeader } from 'carbonite';

class WrapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      height: 0,
      isOpen: true,
    };
    this.onPressMenu = this.onPressMenu.bind(this);
    this.onPressClose = this.onPressClose.bind(this);
  }

  onPressMenu() {
    this.setState({
      menu: !this.state.menu,
    });
  }

  onPressClose() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className="container">
        <CarboniteHeader
          onPress={this.onPressClose}
          isOpen={this.state.isOpen}
          title={'The Journey'}
        />
				{this.props.children}
      </div>
    );
  }
}

// WrapContainer.propTypes = {
//   children: PropTypes.element.isRequired,
// };

export default WrapContainer;
