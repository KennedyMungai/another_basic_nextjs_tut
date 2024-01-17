import axios from "axios"

const fetchSingleUserPosts = async (userId: string) => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        return res.data
    } catch (error: any) {
        throw new Error(error.message)
    }
}


export default fetchSingleUserPosts