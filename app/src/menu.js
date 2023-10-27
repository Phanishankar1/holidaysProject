import { NavLink } from "react-router-dom";
function Menu()
{
    return(
        <nav className="p">
        <NavLink to="/"id="k" >home</NavLink>
        <NavLink to="/about"id="l" >About</NavLink>
        <NavLink to="/items"id="m">Menu</NavLink>
        <NavLink to="/review"id="n">Review</NavLink>
        <NavLink to="/contact"id="n">Contact</NavLink>
        </nav>
    )
}
export default Menu;