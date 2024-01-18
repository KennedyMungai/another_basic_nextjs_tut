import axios from "axios"

const fetchAllUsers = async () => {
	try {
		const res = await axios.get(
			'https://jsonplaceholder.typicode.com/users'
		)
		return res.data
	} catch (error) {
		throw new Error('Failed to fetch data')
	}
}


export default fetchAllUsers