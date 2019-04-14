import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
width:100%;
width:940px;
margin:0 auto;
display:flex;
justify-content: center;
align-self: center;
flex-direction:column;
`;

const SearchContainer = styled.div`
	width:100%;
	display:flex;
	flex-direction: column;
	top: 15px;
	position: relative;
`;

const InputSearch = styled.input`
width:100%;
border-radius: 10px;
font-family: 'arial';
font-size:14px;
letter-spacing:1px;
border:1px solid #ccc;
display:flex;
padding:10px;
justify-content:center;
align-items:center;
&::-webkit-input-placeholder {
	/* Chrome */
	color: ${props => props.theme.color.base4};
	font-size: 14px;
	opacity: 0.5;
}
&:-ms-input-placeholder {
	/* IE 10+ */
	color: ${props => props.theme.color.base4};
	font-size: 14px;
	opacity: 0.5;
}
&::-moz-placeholder {
	/* Firefox 19+ */
	color: ${props => props.theme.color.base4};
	font-size: 14px;
	opacity: 0.5;
}
&:-moz-placeholder {
	/* Firefox 4 - 18 */
	color: ${props => props.theme.color.base4};
	font-size: 14px;
	opacity: 0.5;
}
&::-webkit-search-decoration {
	display: none;
}
&::-webkit-search-cancel-button {
	display: none;
}
&::-webkit-search-results-button {
	display: none;
}
&::-webkit-search-results-decoration {
	display: none;
}

&:focus {
	outline:none;
	border:1px solid #e6e6e6;
}
`;

const TrackerContainer = styled.div`
display:block;
height:20px;
margin-top: 10px;
border-radius:3px;
background:rgba(0,0,0,0);
width:100%;
position:relative;
font-family: 'arial';
font-size:14px;
letter-spacing:1px;
`;

const CloseButton = styled.button`
position:relative;
	top:-45px;
	left:${props => props.closePos};
	padding:7px;
	cursor:pointer;
	color: #777;
background:none;
display:flex;
justify-content: center;
align-items:center;
&:hover{
opacity:.7;
}
.fa {
		font-size:10px;
    background: #d6d6d6;
		border-radius: 50%;
		width: 20px;
    line-height: 19px;
    height: 20px;
}
	&:focus{
	outline:none;
}
  font: 14px/100% arial, sans-serif;
  position: absolute;
  text-decoration: none;
  text-shadow: 0 1px 0 #fff;
  border-radius:50%;  
  border:none;
  content: '×';
`;

const TrackerItem = styled.span`
  background: rgba(255,255,255, 0);
  position:absolute;
  height:100%;
  color: transparent;
  text-indent:5px;
  font-size:14px;
	top:0px;
	font-family: inherit;
`;

class SearchQuery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      spanWidth: 0,
      minSearch: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }
  
  componentDidMount() {
    this.getTrackerWidth();
    this.setState({
      minSearch: false,
      search: '',
      submitSearch: false,
    });
  }
  
  getTrackerWidth() {
    const spanWidth = document.querySelector('.tracker').offsetWidth;
    this.setState({ spanWidth });
	}
	
	// , this.checkState());
  
  checkState() {
    console.log(this.state.spanWidth);
  }
  
  handleTracker(e) {
    const search = e.target.value;
    const minSearch = this.state.search.length >= 3 ? true : false;
		const spanWidth = document.querySelector('.tracker').offsetWidth;
    this.setState({
      search,
			minSearch,
			spanWidth,
      submitSearch: true,
    });
  }
  
  handleClose() {
    this.setState({
      search: '',
      // submitSearch: false,
    });
  }
  
  handleFocus() {
    console.log('focused');
    // this.setState({
    //   submitSearch: false,
    // });
  }
  
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.setState({
        submitSearch: true,
      });
    }
  }
  
  render() {
    const { search, spanWidth, minSearch, submitSearch } = this.state;
    console.log('width of span', spanWidth);
    return (
      <Container>
				<SearchContainer>
        <InputSearch
          type="text"
          placeholder="Search"
          onKeyPress={e => this.handleKeyPress(e)}
          onFocus={this.handleFocus}
          onChange={e => this.handleTracker(e)}
          value={this.state.search}
          id="search" />
        <TrackerContainer>
          {search && (minSearch && submitSearch) && (
            <CloseButton
              onClick={this.handleClose}
              closePos={`${spanWidth + 25}px`}>
              <i className="fa fa-close" />
            </CloseButton>
          )}
          <TrackerItem className="tracker">{search}</TrackerItem>
        </TrackerContainer>
				</SearchContainer>
      </Container>
    );
  }
}

export default SearchQuery;
