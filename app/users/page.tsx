import axios from 'axios'
import Link from 'next/link'

type Props = {}

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

const UsersPage = async (props: Props) => {
	const users = await fetchUsers()

	return (
		<div>
			<div className=''>
				{users.map((user: IUser) => (
					<Link key={user.id} href={`/users/${user.id}`}>
						<div>
							<p>{user.name}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default UsersPage
