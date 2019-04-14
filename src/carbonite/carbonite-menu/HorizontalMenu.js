const { Link } = ReactRouterDOM;
class HorizontalMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected : props.selected || 0
    };
    this.callHistory = this.callHistory.bind(this);
  }
  
  callHistory(el, i) {
    this.setState({
      selected: i
    });
  }
  
  renderMenu() {
    return this.props.data.map((el, i) => {
      let selected = '';
      if(this.state.selected == i) {
        selected = 'active';
      }
      return (
        <li key={i} className={selected}>
          <Link 
            to={el.link}
            onClick={() => this.callHistory(el, i)}>
            {el.title}
          </Link>
        </li>
      )
    });
  }
    
  render() {
    return (
      <ul className="header-menu">
        {this.renderMenu()}
      </ul>
    );
  }
}

export default HorizontalMenu;