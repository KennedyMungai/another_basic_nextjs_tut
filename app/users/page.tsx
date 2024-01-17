import axios from 'axios'

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
					<div key={user.id}>
						<p>{user.name}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default UsersPage
