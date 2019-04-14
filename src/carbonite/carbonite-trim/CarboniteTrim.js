import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CarboniteTrim extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { text, length, tail, tailClassName, ...others } = this.props;

    if (text) {
      if (text.length <= this.props.length || this.props.length < 0) {
        return <span {...others}>{this.props.text}</span>;
      } else {
        const tailStyle = {
          cursor: "default"
        };

        let displayText;
        if (length - tail.length <= 0) {
          displayText = "";
        } else {
          displayText = text.slice(0, length - tail.length);
        }

        return (
          <span title={this.props.text} {...others}>
            {displayText}
            <span style={tailStyle} className={tailClassName}>
              {tail}
            </span>
          </span>
        );
      }
    } else {
      return <div />;
    }
  }
}

CarboniteTrim.PropTypes = {
  text: PropTypes.string,
  length: PropTypes.number,
  tail: PropTypes.string,
  tailClassName: PropTypes.string
};

CarboniteTrim.defaultProps = {
  tail: "...",
  tailClassName: "more"
};

export default CarboniteTrim;
