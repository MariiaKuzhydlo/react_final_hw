import React from "react";
import s from "./UserItem.module.css"

const UserItem = ({ data }) => {
	const { name, nickName, imgUrl } = data;

	return (
		<div className={s.container}>
			<div className={s.imgWrapper}>
				<img src={imgUrl} className={s.userImg} />
			</div>
			<div className={s.info}>
				<div className={s.name}>{name}</div>
				<div className={s.nick}>{nickName}</div>
			</div>
		</div>
	)
}

export default UserItem;