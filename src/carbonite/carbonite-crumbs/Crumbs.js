const { Link } = ReactRouterDOM;
const Crumbs = ({ link, text }) => {
 return (
 	<div>
     <Link className="back" to={link}>
       <span><i className="fa fa-angle-left" aria-hidden="true"></i></span>
       {text}
     </Link>
  </div>
 );
}

export default Crumbs;