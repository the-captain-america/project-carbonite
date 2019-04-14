import React, { Component } from 'react';
import {
	ClosingToday,
	EndingSoon,
	GoingGone,
	NationDelivery,
} from './CarboniteList';
import {
	TagContainer,
	ToolTip,
} from './styles';

class TagSelector extends Component {
  render() {
    const { tagType } = this.props;
    
    const tagTypes = {
      closingToday: 'closingToday',
      endingSoon: 'endingSoon',
      goingGone: 'goingGone',
      nationDelivery: 'nationDelivery'
    };

	  let Placeholder;
    const defaultPlaceholder = <ClosingToday {...this.props} />;
        
    switch(tagType) {  
      case tagTypes.closingToday: {
        Placeholder = <ClosingToday {...this.props} />;
        break;
      }
      case tagTypes.endingSoon: {
        Placeholder = <EndingSoon {...this.props} />;
        break;
      }
      case tagTypes.goingGone: {
        Placeholder = <GoingGone {...this.props} />;
        break;
      }
      case tagTypes.nationDelivery: {
        Placeholder = <NationDelivery {...this.props} />;
        break;
      }
			default:
				return defaultPlaceholder;
		}
  
    return (
      <TagContainer onClick={this.props.onPress}>
        {Placeholder}
        <ToolTip className="tool-tip">
          {`tagType: ${tagType}`}
        </ToolTip>
      </TagContainer>
    )
  }
}

export default TagSelector;
