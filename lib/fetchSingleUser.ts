import axios from "axios"

const fetchSingleUser = async (userId: string) => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${Number(userId)}`)
        return res.data
    } catch (error: any) {
        throw new Error(error.message)
    }

}


export default fetchSingleUser