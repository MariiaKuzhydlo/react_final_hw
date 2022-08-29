import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { v4 } from "uuid"
import s from "./AddUser.module.css"
import { saveUser } from "../../../redux/actions/user-action";

const AddUser = () => {
	const dispatch = useDispatch();
	const id = v4();

	const [name, setName] = useState("");
	const [nickName, setNickName] = useState("");
	const [imgUrl, setImgUrl] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const user = {
			id,
			name,
			nickName,
			imgUrl,
		};

		dispatch(saveUser("http://localhost:4004/users", user));
		setName("");
		setNickName("");
		setImgUrl("");
	};

	return (
		<div>
			<div className={s.container}>
				<div className={s.form}>
					<input className={s.formInput}
						type="text"
						placeholder="User Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					></input>
					<input className={s.formInput}
						type="text"
						placeholder="User Nickname"
						value={nickName}
						onChange={(e) => setNickName(e.target.value)}
					></input>
					<input className={s.formInput}
						type="text"
						placeholder="Img URL"
						value={imgUrl}
						onChange={(e) => setImgUrl(e.target.value)}
					></input>
				</div>
				<button className={s.createBtn}
					onClick={handleSubmit}>
					Create New User
				</button>
			</div>
		</div>
	)
}

export default AddUser;