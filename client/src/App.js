import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import AddUser from './components/Pages/AddUser/AddUser';
import Users from './components/Pages/Users/Users';

function App() {
	return (
		<div className="app">
			<Header />
			<Routes>
				<Route path="/" element={<Users />}></Route>
				<Route path="/addUser" element={<AddUser />} />
			</Routes>
		</div>
	);
}

export default App;
