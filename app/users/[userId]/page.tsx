import fetchAllUsers from '@/lib/fetchAllUsers'
import fetchSingleUser from '@/lib/fetchSingleUser'
import fetchSingleUserPosts from '@/lib/fetchSingleUserPosts'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

type Props = {
	params: {
		userId: string
	}
}

export const generateMetadata = async ({
	params: { userId }
}: Props): Promise<Metadata> => {
	const userData: IUser = await fetchSingleUser(userId)
	const user = await userData

	if (!userData) {
		return {
			title: 'User Not Found',
			description: 'The user requested was not found'
		}
	}

	return {
		title: userData.name,
		description: `This is ${userData.name}'s page`
	}
}

const UserPage = async ({ params: { userId } }: Props) => {
	const user: IUser = await fetchSingleUser(userId)
	const userPosts: IPost[] = await fetchSingleUserPosts(userId)

	if(!user.name) return notFound()

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
			<p>{user.address.geo.lon}</p>
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

export async function generateStaticParams() {
	const usersData: Promise<IUser[]> = await fetchAllUsers()
	const users = await usersData

	return users.map((user) => ({ userId: user.id.toString() }))
}
