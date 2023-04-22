import React, { useState, useEffect } from 'react';


export default function Details({ info }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
			.then((response) => response.json())
			.then((data) => setUser(data))
			.then(() => setLoading(false));
	}, [info.id]);

	return (
		<div>
			{loading && <div>Loading...</div>}
			{user && <div className='user'>
				<img src={user.avatar} alt={user.name} />
				<p className="user-info user-name">{user.name}</p>
				<p className="user-info">City: {user.details.city}</p>
				<p className="user-info">Company: {user.details.company}</p>
				<p className="user-info">Position: {user.details.position}</p>
			</div>}
		</div>
	)
}