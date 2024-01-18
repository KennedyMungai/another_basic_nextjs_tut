const fetchSingleUserPosts = async (userId: string) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, { next: { revalidate: 60 } })
        return res.json()
    } catch (error: any) {
        throw new Error(error.message)
    }
}


export default fetchSingleUserPosts