const fetchSingleUser = async (userId: string) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${Number(userId)}`)
        if(!res.ok) return undefined
        return res.json()
}


export default fetchSingleUser