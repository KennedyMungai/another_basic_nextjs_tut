import axios from 'axios'
import Link from 'next/link'

export const fetchUsers = async () => {
	try {
		const res = await axios.get(
			'https://jsonplaceholder.typicode.com/users'
		)
		return res.data
	} catch (error) {
		throw new Error('Failed to fetch data')
	}
}

export default async function Home() {
	const users = await fetchUsers()

	return (
		<main className='h-[90vh] flex flex-col gap-2 justify-start items-center'>
			<h1>Home Page</h1>
			<p>
				<Link href={'/users'}>Users</Link>
			</p>
			<div className=''>
				{users.map((user: IUser) => (
					<div key={user.id}>
						<p>{user.name}</p>
					</div>
				))}
			</div>
		</main>
	)
}
