import React from "react";
import s from "./Users.module.css"
import { v4 } from "uuid"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getApiUsers } from "../../../redux/actions/user-action";
import UserItem from "./UserItem";
import { userSelector } from "../../../redux/reducers/user-reducer";

const Users = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getApiUsers("http://localhost/4004/users"));
	}, []);

	const users = useSelector(userSelector);

	return (
		<div className={s.container}>
			<div className={s.usersList}>
				{users.length ? (
					users.map((user) => {
						return <UserItem data={user} key={v4()} />;
					})
				) : (
					<div className={s.noUsers}>No users found</div>
				)}
			</div>
		</div>
	)
}

export default Users;