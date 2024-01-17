import axios from 'axios'
import React, { Suspense } from 'react'

type Props = {
	params: {
		userId: string
	}
}

export const fetchUser = async (userId: string) => {
	try {
		const res = await axios.get(
			`https://jsonplaceholder.typicode.com/users/${Number(userId)}`
		)
		return res.data
	} catch (error) {
		throw new Error('Failed to fetch data')
	}
}

export const fetchUserPosts = async (userId: string) => {
	try {
		const res = await axios.get(
			`https://jsonplaceholder.typicode.com/posts?userId=${userId}`
		)

		return res.data
	} catch (error) {
		throw new Error('Failed to fetch data')
	}
}

const UserPage = async ({ params: { userId } }: Props) => {
	const user = await fetchUser(userId)
	const userPosts: IPost[] = await fetchUserPosts(userId)

	return (
		<div>
			<h1>{user.name}</h1>
			<p>{user.email}</p>
			<p>{user.phone}</p>
			<p>{user.website}</p>
			<p>{user.address.city}</p>
			<p>{user.address.street}</p>
			<p>{user.address.suite}</p>
			<p>{user.address.zipcode}</p>
			<p>{user.address.geo.lat}</p>
			<p>{user.address.geo.lng}</p>
			<p>{user.company.name}</p>
			<p>{user.company.catchPhrase}</p>
			<p>{user.company.bs}</p>
			<br />
			<br />
			<br />
			<h2>Posts</h2>
			<div>
				<Suspense
					fallback={
						<p className='text-xl text-red-500'>Loading Posts...</p>
					}
				>
					{userPosts.map((post: IPost) => (
						<div key={post.id}>
							<p>{post.title}</p>
							<p className='text-xs'>{post.body}</p>
							<br />
							<br />
						</div>
					))}
				</Suspense>
			</div>
		</div>
	)
}

export default UserPage
