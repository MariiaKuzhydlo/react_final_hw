import { NavLink } from "react-router-dom";
import s from "./Nav.module.css"


const Nav = () => {
	return (
		<div className={s.container}>
			<ul className={s.nav} >
				<li className={s.item}><NavLink to="/">Users</NavLink></li>
				<li className={s.item}><NavLink to="/addUser">AddUser</NavLink></li>
			</ul>
		</div>
	)
}

export default Nav;