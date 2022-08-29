import Nav from "./Nav/Nav";
import s from "./Header.module.css"

const Header = () => {
	return (
		<div className={s.header}>
			<Nav />
		</div >
	)
}

export default Header;