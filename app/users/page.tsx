import fetchAllUsers from '@/lib/fetchAllUsers'
import { Metadata } from 'next'
import Link from 'next/link'

type Props = {}

export const metadata: Metadata = {
	title: 'Users',
	description: 'The users page'
}

export 

const UsersPage = async (props: Props) => {
	const users = await fetchAllUsers()

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
