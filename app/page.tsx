import axios from 'axios'
import Link from 'next/link'

export default async function Home() {
	return (
		<main className='h-[90vh] flex flex-col gap-2 justify-start items-center'>
			<h1>Home Page</h1>
			<p>
				<Link href={'/users'}>Users</Link>
			</p>
			
		</main>
	)
}
